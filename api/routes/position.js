var express = require('express');
var router = express.Router();
var positionDA = require('../dataAccess/positionsDA');

router.get('/', (req, res) => {
  positionDA.getPositionsData().then((positions) => {
    res.json(positions)
  })
});

module.exports = router;

