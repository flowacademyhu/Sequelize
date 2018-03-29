const express = require('express');
const languages = express();

const models = require('../models');

// index
languages.get('/', (req, res) => {
  models.language.findAll().then(languages => {
    res.json(languages);
  });
});

// show
languages.get('/:id', (req, res) => {
  models.language.findById(req.params.id).then(language => {
    res.json(language);
  });
});

// create
languages.post('/', (req, res) => {
  models.language.create({name: req.query.name}).then(language => {
    res.json(language + '\n created.');
  });
});

// update
languages.put('/:id', (req, res) => {
  models.language.update({name: req.query.name}, {where: {id: req.params.id}}).then(language => {
    res.json(language + '\n updated.');
  });
});

// delete
languages.delete('/:id', (req, res) => {
  models.language.findById(req.params.id).then(language => {
    language.destroy().then(() => {
      res.json(language + '\n deleted.');
    });
  });
});

module.exports = {controller: languages, route: '/languages'};
