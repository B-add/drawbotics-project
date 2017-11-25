const CandidateModel = require("../models/CandidateModel");

exports.getCandidates = () => {
  return CandidateModel.find({});
};

exports.addCandidate= (name, firstname, mail, skills) => {
  var candidate = new CandidateModel({
    name: name,
    firstname: firstname,
    mail: mail,
    skills: skills.split(';')
  });
  return candidate.save();
};


exports.removeCandidate = (id) => {
  return CandidateModel.find({ _id:id }).remove().exec();
};
