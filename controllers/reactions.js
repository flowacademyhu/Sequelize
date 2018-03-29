const express = require('express');

const reactions = express();

const models = require('../models');

// index

reactions.get('/', (req, res) => {
  models.reaction.findAll().then(reactions => {
    res.json(reactions);
  });
});

// show

reactions.get('/:id', (req, res) => {
  models.reaction.findById(req.params.id).then(reaction => {
    res.json(reaction);
  });
});

// create

reactions.post('/', (req, res) => {
  models.reaction.create({user_id: req.query.user_id,
    post_id: req.query.post_id}).then(reaction => {
    res.json(reaction + '\n created.');
  });
});

// update

reactions.put('/:id', (req, res) => {
  models.reaction.update({user_id: req.query.user_id,
    post_id: req.query.post_id}, {where: {id: req.params.id}}).then(reaction => {
    res.json(reaction + '\n updated.');
  });
});

// delete

reactions.delete('/:id', (req, res) => {
  models.reaction.findById(req.params.id).then(reaction => {
    reaction.destroy().then(() => {
      res.json(reaction + '\n deleted.');
    });
  });
});
module.exports = {controller: reactions, route: '/reactions'};
