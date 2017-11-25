var express = require('express');
var router = express.Router();
var positionDA = require('../dataAccess/positionsDA');

router.get('/', (req, res) => {
  positionDA.getPositionsData().then((positions) => {
    res.json(positions)
  })
});

router.post('/', (req, res) => {
  positionDA.addPosition(req.body.title).then((position) => {
    res.json(position);
  })
});

module.exports = router;

