const express = require('express');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const passportConfig = require('./passport/passport-config');
const _ = require('lodash');
const secretConfig = require('./secret-config.js');
var City = require('./models/city.js');
var Location = require('./models/location.js');
var User = require('./models/user.js');
const app = express();

mongoose.connect("mongodb://localhost:27017/happy", { useMongoClient: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.options('*', cors());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build'), {index: '_'}));

app.use(session({ 
  secret: 'temptemptemp'
 })); // session secret

app.use(passport.initialize());
app.use(passport.session());

app.get('/cities', (req, res) => {
  City.find({}, function(err, cities) {
      res.json(cities);
    });  
});

app.post('/city', (req, res) => {
  let city = new City();
  city.name = req.body.name;

  city.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'City added to DB', data: city });
  });  
});

app.delete('/city', (req, res) => {
  let city = new City();
  city._id = req.body._id;

  city.remove(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'City deleted from DB', data: city });
  });  
});

app.post('/city/:cityId/neighborhood', (req, res) => {

  City.findById(req.params.cityId, function(err, city) {
    let neighborhoods = city.neighborhoods ? city.neighborhoods : [];
    neighborhoods.push({"name": req.body.name});
    city.neighborhoods = neighborhoods;

    // Using a promise rather than a callback
    city.save().then(function(savedCity) {
      res.send(savedCity);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
});

app.get('/city/:cityId/locations', (req, res) => {
  Location.find({"cityId": req.params.cityId}, function(err, locations) {
      res.json(locations);
    });  
});

app.post('/location', (req, res) => {
  let location = new Location();
  location.name = req.body.name;
  location.cityId = req.body.cityId;
  location.position = {
    latitude: req.body.position.latitude,
    longitude: req.body.position.longitude
  };
  location.address = {
    streetAddress: req.body.address.streetAddress,
    city: req.body.address.city,
    state: req.body.address.state,
    zip: req.body.address.zip
  }

  location.save(function(err) {
    if (err) {
      console.log(err);
    }
    res.json({ message: 'location added to DB', data: location });
  });  
});

app.post('/location/:locationId/special', (req, res) => {
  Location.findById(req.params.locationId, function(err, location) {
    const specials = location.specials ? location.specials : [];
    specials.push(req.body.special);
    location.specials = specials;
    // Using a promise rather than a callback
    location.save().then(function(savedLocation) {
      res.send(savedLocation);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
});

app.post('/location/:locationId/special/:specialId', (req, res) => {
  Location.findById(req.params.locationId, function(err, location) {
    const special = location.specials.id(req.params.specialId);
    special.set(req.body.special);
    
    // Using a promise rather than a callback
    location.save().then(function(savedLocation) {
      res.send(savedLocation);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
});

app.delete('/location/:locationId/special/:specialId', (req, res) => {
  Location.findById(req.params.locationId, function(err, location) {
    let specials = location.specials ? location.specials : [];
    specials = _.remove(specials, function(special) {
        return special._id === req.params.specialId;
    });

    location.specials = specials;
    // Using a promise rather than a callback
    location.save().then(function(savedLocation) {
      res.send(savedLocation);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
});


app.post('/login', 
  passport.authenticate('local-login', 
    {
      failureRedirect: '/login'
    }),
    function(req, res) {
      res.redirect('/');
    }
);

app.get('/login', (req, res) => {
  console.log("/login");
  res.sendFile(path.resolve(__dirname, '..', 'build', 'login.html'));
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  let user = new User();
  user.username = req.body.username;
  user.password = user.generateHash(req.body.password);

  if (req.body.username && req.body.password && req.body.secretCode === secretConfig.signUpSecretCode) {
    user.save(function(err) {
      if (err)
        res.send(err);
  
      res.redirect('/login');
    });
  } else {
    res.status(401);
    res.json({ message: 'You don\'t know the secret code' });
  }
});


app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'signup.html'));
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', isLoggedIn, (req, res) => {
  console.log("***");
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

function isLoggedIn(req, res, next) {
  console.log("```````````````isLoggedIn: ", req.isAuthenticated());  
    
    if (process.env.NODE_ENV === "development" || req.isAuthenticated()) {      
      return next();
    }

    res.redirect("/login");
}
module.exports = app;