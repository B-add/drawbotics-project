var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://lamatt_v:lamatt_v@ds119736.mlab.com:19736/drawbotics-project');

var position = require('./routes/position');

const app = express();

app.use('/position', position);

app.listen(3001, function () {
  console.log('API running on port 3001!')
});

