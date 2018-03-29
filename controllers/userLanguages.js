const express = require('express');
const userLanguages = express();

const models = require('../models');

// index
userLanguages.get('/', (req, res) => {
  models.userLanguage.findAll().then(userLanguages => {
    res.json(userLanguages);
  });
});

// show
userLanguages.get('/:id', (req, res) => {
  models.userLanguage.findById(req.params.id).then(userLanguage => {
    res.json(userLanguage);
  });
});

// create
userLanguages.post('/', (req, res) => {
  models.userLanguage.create({user_id: req.query.user_id,
    language_id: req.query.language_id,
    level: req.query.level}).then(userLanguage => {
    res.json(userLanguage);
    console.log('\nCreated.');
  });
});

// update
userLanguages.put('/:id', (req, res) => {
  models.userLanguage.update({user_id: req.query.user_id,
    language_id: req.query.language_id,
    level: req.query.level}, {where: {id: req.params.id}}).then(userLanguage => {
    res.json(userLanguage);
    console.log('\nUpdated.');
  });
});

// delete
userLanguages.delete('/:id', (req, res) => {
  models.userLanguage.findById(req.params.id).then(userLanguage => {
    userLanguage.destroy().then(() => {
      res.json(userLanguage);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: userLanguages, route: '/userLanguages'};
