var express = require('express');
var router = express.Router();
var positionDA = require('../dataAccess/positionsDA');

router.get('/', (req, res) => {
  positionDA.getPositionsData().then((positions) => {
    res.json(positions)
  })
});

router.post('/', (req, res) => {
  positionDA.addPosition(req.body.title, req.body.description).then((position) => {
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

router.post('/addSkill', (req, res) => {
  positionDA.addPositionSkill(req.body.id, req.body.skill).then((position) => {
    res.json(position);
  }).catch((err) => {
    res.json(false);
  });
});

router.post('/removeSkill', (req, res) => {
  positionDA.removePositionSkill(req.body.id, req.body.skill).then((position) => {
    res.json(position);
  }).catch((err) => {
    res.json(false);
  });
});

router.post('/attachCandidate', (req, res) => {
  positionDA.attachCandidateToPosition(req.body.positionId, req.body.candidateId).then((position) => {
    res.json(position);
  }).catch((err) => {
    res.json(false);
  });
});

router.delete('/detachCandidate', (req, res) => {
  positionDA.detachCandidateFromPosition(req.body.positionId, req.body.candidateId).then((position) => {
    res.json(position);
  }).catch((err) => {
    console.log(err)
    res.json(false);
  });
});


module.exports = router;

