const express = require('express');
const pictures = express();

const models = require('../models');

// index
pictures.get('/', (req, res) => {
  models.picture.findAll().then(pictures => {
    res.json(pictures);
  });
});

// show
pictures.get('/:id', (req, res) => {
  models.picture.findById(req.params.id).then(picture => {
    res.json(picture);
  });
});

// create
pictures.post('/', (req, res) => {
  models.picture.create({format: req.query.format,
    url: req.query.url}).then(picture => {
    res.json(picture + '\n created.');
  });
});

// update
pictures.put('/:id', (req, res) => {
  models.picture.update({format: req.query.format,
    url: req.query.url}, {where: {id: req.params.id}}).then(picture => {
    res.json(picture + '\n updated.');
  });
});

// delete
pictures.delete('/:id', (req, res) => {
  models.picture.findById(req.params.id).then(picture => {
    picture.destroy().then(() => {
      res.json(picture + '\n deleted.');
    });
  });
});

module.exports = {controller: pictures, route: '/pictures'};
