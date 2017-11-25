const PositionModel = require("../models/PositionModel");
const CandidateModel = require("../models/CandidateModel");

exports.getPositionsData = () => {
  return PositionModel.find({});
};

exports.addPosition = (title, description) => {
  var position = new PositionModel({
    title: title,
    description: description,
    skills: [],
    applicants: []
  });
  return position.save();
};


exports.removePosition = (id) => {
  return PositionModel.find({ _id:id }).remove().exec();
};

exports.addPositionSkill = (id, skill) => {
  return PositionModel.findOne({ _id:id }).then((position) => {
    position.skills.push(skill);
    return position.save();
  })
};

exports.removePositionSkill = (id, skill) => {
  return PositionModel.findOne({ _id:id }).then((position) => {
    position.skills = position.skills.filter((s) => s !== skill);
    return position.save();
  })
};

exports.attachCandidateToPosition = (positionId, candidateId) => {
  return PositionModel.findOne({ _id:positionId }).then((position) => {
    return CandidateModel.findOne({ _id:candidateId }).then((candidate) => {
      position.applicants.push(candidate);
      return position.save();
    })
  })
};

exports.detachCandidateFromPosition = (positionId, candidateId) => {
  return PositionModel.findOne({ _id:positionId }).then((position) => {
    position.applicants = position.applicants.filter((applicant) => {
      return applicant._id.toString() !== candidateId
    });
    return position.save();
  })
};