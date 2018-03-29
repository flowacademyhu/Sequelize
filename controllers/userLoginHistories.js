const express = require('express');
const userLoginHistories = express();

const models = require('../models');

// index
userLoginHistories.get('/', (req, res) => {
  models.userLoginHistory.findAll().then(userLoginHistories => {
    res.json(userLoginHistories);
  });
});

// show
userLoginHistories.get('/:id', (req, res) => {
  models.userLoginHistory.findById(req.params.id).then(userLoginHistory => {
    res.json(userLoginHistory);
  });
});

// create
userLoginHistories.post('/', (req, res) => {
  models.userLoginHistory.create({user_id: req.query.user_id,
    device_id: req.query.device_id,
    date: req.query.date}).then(userLoginHistory => {
    res.json(userLoginHistory);
    console.log('\nCreated.');
  });
});

// update
userLoginHistories.put('/:id', (req, res) => {
  models.userLoginHistory.update({user_id: req.query.user_id,
    device_id: req.query.device_id,
    date: req.query.date}, {where: {id: req.params.id}}).then(userLoginHistory => {
    res.json(userLoginHistory);
    console.log('\nUpdated.');
  });
});

// delete
userLoginHistories.delete('/:id', (req, res) => {
  models.userLoginHistory.findById(req.params.id).then(userLoginHistory => {
    userLoginHistory.destroy().then(() => {
      res.json(userLoginHistory);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: userLoginHistories, route: '/userLoginHistories'};
