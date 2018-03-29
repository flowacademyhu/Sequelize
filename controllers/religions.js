const express = require('express');
const religions = express();
const models = require('../models');

// index
religions.get('/', (req, res) => {
  models.religion.findAll().then(religions => {
    res.json(religions);
  });
});

// show
religions.get('/:id', (req, res) => {
  models.religion.findById(req.params.id).then(religion => {
    res.json(religion);
  });
});

// create
religions.post('/', (req, res) => {
  models.religion.create({name: req.query.name}).then(religion => {
    res.json(religion + '\n created');
  });
});

// update
religions.put('/:id', (req, res) => {
  models.religion.update({name: req.query.name}, {where: {id: req.params.id}}).then(religion => {
    res.json(religion + '\n updated');
  });
});

// delete
religions.delete('/:id', (req, res) => {
  models.religion.findById(req.params.id).then(religion => {
    religion.destroy().then(() => {
      res.json(religion + '\n deleted');
    });
  });
});

module.exports = {controller: religions, route: '/religions'};
