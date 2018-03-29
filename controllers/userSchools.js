const express = require('express');
const userSchools = express();
const models = require('../models');
// index
userSchools.get('/', (req, res) => {
  models.userSchool.findAll().then(userSchools => {
    res.json(userSchools);
  });
});
// show
userSchools.get('/:id', (req, res) => {
  models.userSchool.findById(req.params.id).then(userSchool => {
    res.json(userSchool);
  });
});
// create
userSchools.post('/', (req, res) => {
  models.userSchool.create({user_id: req.query.user_id,
    school_id: req.query.school_id,
    since: req.query.since,
    till: req.query.till,
    degree: req.query.degree}).then(userSchool => {
    res.json(userSchool);
    console.log('\nCreated.');
  });
});
// update
userSchools.put('/:id', (req, res) => {
  models.userSchool.update({user_id: req.query.user_id,
    school_id: req.query.school_id,
    since: req.query.since,
    till: req.query.till,
    degree: req.query.degree}, {where: {id: req.params.id}}).then(userSchool => {
    res.json(userSchool);
    console.log('\nUpdated.');
  });
});
// delete
userSchools.delete('/:id', (req, res) => {
  models.userSchool.findById(req.params.id).then(userSchool => {
    userSchool.destroy().then(() => {
      res.json(userSchool);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: userSchools, route: '/userSchools'};
