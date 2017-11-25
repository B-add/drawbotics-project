const mongoose = require("mongoose");
const Position = require("../models/Position");

exports.getPositionsData = () => {
  return Position.find({});
};

exports.addPosition = (title) => {
  var position = new Position({
    title: title,
    skills: [],
    applicants: []
  });
  return position.save();
};


exports.removePosition = (id) => {
  return Position.find({ _id:id }).remove().exec();
};

exports.addPositionSkill = (id, skill) => {
  return Position.findOne({ _id:id }).then((position) => {
    position.skills.push(skill);
    return position.save();
  })
};

exports.removePositionSkill = (id, skill) => {
  return Position.findOne({ _id:id }).then((position) => {
    position.skills = position.skills.filter((s) => s !== skill);
    return position.save();
  })
};