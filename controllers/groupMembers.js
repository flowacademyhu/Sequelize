const express = require('express');
const groupMembers = express();
const models = require('../models');

// index
groupMembers.get('/', (req, res) => {
  models.groupMembers.findAll().then(groupMembers => {
    res.json(groupMembers);
  });
});

// show
groupMembers.get('/:id', (req, res) => {
  models.groupMembers.findById(req.params.id).then(groupMembers => {
    res.json(groupMembers);
  });
});
// create
groupMembers.post('/', (req, res) => {
  models.groupMembers.create({user_id: req.query.user_id}, {group_role_id: req.query.group_role_id}, {group_id: req.query.group_id}).then(groupMembers => {
    res.json(groupMembers + '\n created');
  });
});
// update
groupMembers.put('/:id', (req, res) => {
  models.groupMembers.update({user_id: req.query.user_id}, {group_role_id: req.query.group_role_id}, {group_id: req.query.group_id}, {where: req.params.id}).then(groupMembers => {
    res.json(groupMembers + '\n updated');
  });
});
// delete
groupMembers.delete('/:id', (req, res) => {
  models.groupMembers.findById(req.params.id).then(groupMembers => {
    groupMembers.destroy().then(() => {
      res.json(groupMembers + '\n deleted');
    });
  });
});
