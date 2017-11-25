var express = require('express');
var router = express.Router();
var candidateDA = require('../dataAccess/candidatesDA');

router.get('/', (req, res) => {
  candidateDA.getCandidates().then((candidates) => {
    res.json(candidates)
  })
});

router.post('/', (req, res) => {
  const { name, firstname, mail, skills } = req.body;
  candidateDA.addCandidate(name, firstname, mail, skills).then((candidate) => {
    res.json(candidate);
  })
});

router.delete('/', (req, res) => {
  candidateDA.removeCandidate(req.body.id).then((result) => {
    res.json(true);
  }).catch((err) => {
    res.json(false);
  });
});


module.exports = router;

