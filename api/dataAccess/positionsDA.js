const PositionModel = require("../models/PositionModel");

exports.getPositionsData = () => {
  return PositionModel.find({});
};

exports.addPosition = (title) => {
  var position = new PositionModel({
    title: title,
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