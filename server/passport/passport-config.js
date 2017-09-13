const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/user.js');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, username, password, done) { // callback with email and password from our form

    console.log("~~~ local-login", username, password, done );
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    User.findOne({ 'username' :username }, function(err, user) {
        // if there are any errors, return the error before anything else
        if (err)
            return done(err);

        // if no user is found, return the message
        if (!user)
            return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

        // if the user is found but the password is wrong
        if (!user.validPassword(password)) {
            return done(null, false); // create the loginMessage and save it to session as flashdata
        }

        console.log("~~~ all is well, retuern user: ", user);
        // all is well, return successful user
        return done(null, user);
    });

}));