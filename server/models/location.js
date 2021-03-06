var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Time = new Schema({
  start: {
        type: String,
        required: true
    },
  end: {
        type: String,
        required: true
    }
});

var Special = new Schema({
    headline: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },      
    days: {
      type: Array,
      required: true
    }, 
    times: {
      type: [Time],
      required: true
    }
});

var Position = new Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  }
});

var Address = new Schema({
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  }    
});

var Location = new Schema({
    name: {
      type: String,
      required: true
    },
    cityId: Schema.Types.ObjectId,
    specials: [Special],
    position: {
      type: Position,
      required: true
    },
    address: {
      type: Address,
      required: true
    }
});



var Model = mongoose.model('Location', Location);
module.exports = Model;