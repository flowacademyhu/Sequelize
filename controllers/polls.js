const express = require('express');

const polls = express();

const models = require('../models');

// index

polls.get('/', (req, res) => {
  models.poll.findAll().then(polls => {
    res.json(polls);
  });
});

// show

polls.get('/:id', (req, res) => {
  models.poll.findById(req.params.id).then(poll => {
    res.json(poll);
  });
});

// create

polls.post('/', (req, res) => {
  models.poll.create({question: req.query.question}).then(poll => {
    res.json(poll + '\n created.');
  });
});

// update

polls.put('/:id', (req, res) => {
  models.poll.update({question: req.query.question}, {where: {id: req.params.id}}).then(poll => {
    res.json(poll + '\n updated.');
  });
});

// delete

polls.delete('/:id', (req, res) => {
  models.poll.findById(req.params.id).then(poll => {
    poll.destroy().then(() => {
      res.json(poll + '\n deleted.');
    });
  });
});
module.exports = {controller: polls, route: '/polls'};
