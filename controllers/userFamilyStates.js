const express = require('express');
const userFamilyStates = express();
const models = require('../models');

// index
userFamilyStates.get('/', (req, res) => {
  models.userFamilyState.findAll().then(userFamilyStates => {
    res.json(userFamilyStates);
  });
});
// show
userFamilyStates.get('/:id', (req, res) => {
  models.userFamilyState.findById(req.params.id).then(userFamilyState => {
    res.json(userFamilyState);
  });
});
// create
userFamilyStates.post('/', (req, res) => {
  models.userFamilyState.create({relation_id: req.query.relation_id,
    user_id: req.query.user_id,
    partner_id: req.query.partner_id}).then(userFamilyState => {
    res.json(userFamilyState);
    console.log('\nCreated.');
  });
});
// update
userFamilyStates.put('/:id', (req, res) => {
  models.userFamilyState.update({relation_id: req.query.relation_id,
    user_id: req.query.user_id,
    partner_id: req.query.partner_id}, {where: {id: req.params.id}}).then(userFamilyState => {
    res.json(userFamilyState);
    console.log('\nUpdated.');
  });
});
// delete
userFamilyStates.delete('/:id', (req, res) => {
  models.userFamilyState.findById(req.params.id).then(userFamilyState => {
    userFamilyState.destroy().then(() => {
      res.json(userFamilyState);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: userFamilyStates, route: '/userFamilyStates'};
