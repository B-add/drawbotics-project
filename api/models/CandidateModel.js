const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: String,
  firstname: String,
  mail: String,
  skills: [String]
});

module.exports = mongoose.model('Candidate', CandidateSchema, 'candidates');