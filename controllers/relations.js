const express = require('express');
const relations = express();
const models = require('../models');

// index
relations.get('/', (req, res) => {
  models.relation.findAll().then(relations => {
    res.json(relations);
  });
});

// show
relations.get('/:id', (req, res) => {
  models.relation.findById(req.params.id).then(relation => {
    res.json(relation);
  });
});

// create
relations.post('/', (req, res) => {
  models.relation.create({type: req.query.type}).then(relation => {
    res.json(relation + '\n created');
  });
});

// update
relations.put('/:id', (req, res) => {
  models.relation.update({type: req.query.type}, {where: {id: req.params.id}}).then(relation => {
    res.json(relation + '\n updated');
  });
});

// delete
relations.delete('/:id', (req, res) => {
  models.relation.findById(req.params.id).then(relation => {
    relation.destroy().then(() => {
      res.json(relation + '\n deleted');
    });
  });
});

module.exports = {controller: relations, route: '/relations'};
