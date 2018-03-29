const express = require('express');
const userPhotos = express();

const models = require('../models');

// index
userPhotos.get('/', (req, res) => {
  models.userPhoto.findAll().then(userPhotos => {
    res.json(userPhotos);
  });
});

// show
userPhotos.get('/:id', (req, res) => {
  models.userPhoto.findById(req.params.id).then(userPhoto => {
    res.json(userPhoto);
  });
});

// create
userPhotos.post('/', (req, res) => {
  models.userPhoto.create({user_id: req.query.user_id,
    description: req.query.description}).then(userPhoto => {
    res.json(userPhoto);
    console.log('\nCreated.');
  });
});

// update
userPhotos.put('/:id', (req, res) => {
  models.userPhoto.update({user_id: req.query.user_id,
    description: req.query.description}, {where: {id: req.params.id}}).then(userPhoto => {
    res.json(userPhoto);
    console.log('\nUpdated.');
  });
});

// delete
userPhotos.delete('/:id', (req, res) => {
  models.userPhoto.findById(req.params.id).then(userPhoto => {
    userPhoto.destroy().then(() => {
      res.json(userPhoto);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: userPhotos, route: '/userPhotos'};
