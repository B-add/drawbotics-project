const mongoose = require("mongoose");
const Position = require("../models/Position");

exports.getPositionsData = () => {
  return Position.find({});
};