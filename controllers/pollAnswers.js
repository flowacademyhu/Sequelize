const express = require('express');

const pollAnswers = express();

const models = require('../models');

// index

pollAnswers.get('/', (req, res) => {
  models.pollAnswer.findAll().then(pollAnswers => {
    res.json(pollAnswers);
  });
});

// show

pollAnswers.get('/:id', (req, res) => {
  models.pollAnswer.findById(req.params.id).then(pollAnswer => {
    res.json(pollAnswer);
  });
});

// create

pollAnswers.post('/', (req, res) => {
  models.pollAnswer.create({poll_id: req.query.poll_id,
    options: req.query.options}).then(pollAnswer => {
    res.json(pollAnswer + '\n created.');
  });
});

// update

pollAnswers.put('/:id', (req, res) => {
  models.pollAnswer.update({poll_id: req.query.poll_id,
    options: req.query.options}, {where: {id: req.params.id}}).then(pollAnswer => {
    res.json(pollAnswer + '\n updated.');
  });
});

// delete

pollAnswers.delete('/:id', (req, res) => {
  models.pollAnswer.findById(req.params.id).then(pollAnswer => {
    pollAnswer.destroy().then(() => {
      res.json(pollAnswer + '\n deleted.');
    });
  });
});
module.exports = {controller: pollAnswers, route: '/pollAnswers'};
