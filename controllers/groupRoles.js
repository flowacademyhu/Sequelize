const express = require('express');
const groupRoles = express();
const models = require('../models');

// index
groupRoles.get('/', (req, res) => {
  models.groupRoles.findAll().then(groupRoles => {
    res.json(groupRoles);
  });
});

// show
groupRoles.get('/:id', (req, res) => {
  models.groupRoles.findById(req.params.id).then(groupRoles => {
    res.json(groupRoles);
  });
});
// create
groupRoles.post('/', (req, res) => {
  models.groupRoles.create({role_name: req.query.role_name}).then(groupRoles => {
    res.json(groupRoles + '\n created');
  });
});
// update
groupRoles.put('/', (req, res) => {
  models.groupRoles.update({role_name: req.query.role_name}, {where: req.params.id}).then(groupRoles => {
    res.json(groupRoles + '\n updated');
  });
});
// delete
groupRoles.delete('/', (req, res) => {
  models.groupRoles.findById(req.params.id).then(groupRoles => {
    groupRoles.destroy().then(() => {
      res.json(groupRoles + '\n created');
    });
  });
});
