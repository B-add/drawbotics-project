var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://lamatt_v:lamatt_v@ds119736.mlab.com:19736/drawbotics-project');

var position = require('./routes/position');
var candidate = require('./routes/candidate');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/position', position);
app.use('/candidate', candidate);

app.listen(3001, function () {
  console.log('API running on port 3001!')
});

