var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://lamatt_v:lamatt_v@ds119736.mlab.com:19736/drawbotics-project');
var positionDA = require('./dataAccess/positionsDA');

const app = express();

app.get('/', function (req, res) {
  positionDA.getPositionsData().then((positions) => {
    res.json(positions)
  })
});

app.listen(3001, function () {
  console.log('API running on port 3001!')
});

