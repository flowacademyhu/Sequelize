const express = require('express');
const userWorkplaces = express();
const models = require('../models');
// index
userWorkplaces.get('/', (req, res) => {
  models.userWorkplace.findAll().then(userWorkplaces => {
    res.json(userWorkplaces);
  });
});
// show
userWorkplaces.get('/:id', (req, res) => {
  models.userWorkplace.findById(req.params.id).then(userWorkplace => {
    res.json(userWorkplace);
  });
});
// create
userWorkplaces.post('/', (req, res) => {
  models.userWorkplace.create({user_id: req.query.user_id,
    workplace_id: req.query.workplace_id,
    start_date: req.query.start_date,
    end_date: req.query.end_date,
    position: req.query.position}).then(userWorkplace => {
    res.json(userWorkplace);
    console.log('\nCreated.');
  });
});
// update
userWorkplaces.put('/:id', (req, res) => {
  models.userWorkplace.update({user_id: req.query.user_id,
    workplace_id: req.query.workplace_id,
    start_date: req.query.start_date,
    end_date: req.query.end_date,
    position: req.query.position}, {where: {id: req.params.id}}).then(userWorkplace => {
    res.json(userWorkplace);
    console.log('\nUpdated.');
  });
});
// delete
userWorkplaces.delete('/:id', (req, res) => {
  models.userWorkplace.findById(req.params.id).then(userWorkplace => {
    userWorkplace.destroy().then(() => {
      res.json(userWorkplace);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: userWorkplaces, route: '/userWorkplaces'};
