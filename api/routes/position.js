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

router.delete('/', (req, res) => {
  positionDA.removePosition(req.body.id).then((result) => {
    res.json(true);
  }).catch((err) => {
    res.json(false);
  });
});

module.exports = router;

