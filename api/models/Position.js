const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
  title: String,
  skills: [String],
  applicants: [{
    name: String,
    firstname: String,
    mail: String,
    skills: [String]
  }]
});

module.exports = mongoose.model('Position', PositionSchema, 'positions');