const express = require('express');
const groupRoles = express();
const models = require('../models');

// index
groupRoles.get('/', (req, res) => {
  models.groupRole.findAll().then(groupRoles => {
    res.json(groupRoles);
  });
});

// show
groupRoles.get('/:id', (req, res) => {
  models.groupRole.findById(req.params.id).then(groupRole => {
    res.json(groupRole);
  });
});
// create
groupRoles.post('/', (req, res) => {
  models.groupRole.create({role_name: req.query.role_name}).then(groupRole => {
    res.json(groupRole + '\n created');
  });
});
// update
groupRoles.put('/', (req, res) => {
  models.groupRole.update({role_name: req.query.role_name}, {where: req.params.id}).then(groupRole => {
    res.json(groupRole + '\n updated');
  });
});
// delete
groupRoles.delete('/', (req, res) => {
  models.groupRole.findById(req.params.id).then(groupRole => {
    groupRoles.destroy().then(() => {
      res.json(groupRole + '\n created');
    });
  });
});

module.exports = {controller: groupRoles, route: '/groupRoles'};
