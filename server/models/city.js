var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Neighborhood = new Schema({
    name: {
        type: String,
        required: true
    }
});

Neighborhood.pre('validate', function(next) {
  next();
});

Neighborhood.pre('save', function(next) {
  next();
});


var City = new Schema({
    name: {
        type: String,
        required: true
    },
    neighborhoods: [Neighborhood]
});


City.pre('validate', function(next) {
  next();
});

City.pre('save', function(next) {
  next();
});


var Model = mongoose.model('City', City);
module.exports = Model;