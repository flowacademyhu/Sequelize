const express = require('express');
const friends = express();

const models = require('../models');

// index
friends.get('/', (req, res) => {
  models.friend.findAll().then(friends => {
    res.json(friends);
  });
});

// show
friends.get('/:id', (req, res) => {
  models.friend.findById(req.params.id).then(friend => {
    res.json(friend);
  });
});

// create
friends.post('/', (req, res) => {
  models.friend.create({user_id: req.query.user_id, friend_id: req.query.friend_id}).then(friend => {
    res.json(friend);
    console.log('\nCreated.');
  });
});

// update
friends.put('/:id', (req, res) => {
  models.friend.update({user_id: req.query.user_id, friend_id: req.query.friend_id}, {where: {id: req.params.id}}).then(friend => {
    res.json(friend);
    console.log('\nUpdated.');
  });
});

// delete friend
friends.delete('/:id', (req, res) => {
  models.friend.findById(req.params.id).then(friend => {
    friend.destroy().then(() => {
      res.json(friend);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: friends, route: '/friends'};
