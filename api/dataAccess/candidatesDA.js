const CandidateModel = require("../models/CandidateModel");

exports.getCandidate = () => {
  return CandidateModel.find({});
};

exports.addCandidate= (name, firstname, mail) => {
  var candidate = new CandidateModel({
    name: String,
    firstname: String,
    mail: String,
    skills: []
  });
  return candidate.save();
};


exports.removeCandidate = (id) => {
  return CandidateModel.find({ _id:id }).remove().exec();
};
