const express = require('express');
const groupMembers = express();
const models = require('../models');

// index
groupMembers.get('/', (req, res) => {
  models.groupMember.findAll().then(groupMembers => {
    res.json(groupMembers);
  });
});

// show
groupMembers.get('/:id', (req, res) => {
  models.groupMember.findById(req.params.id).then(groupMember => {
    res.json(groupMembers);
  });
});

// create
groupMembers.post('/', (req, res) => {
  models.groupMember.create({user_id: req.query.user_id}, {group_role_id: req.query.group_role_id}, {group_id: req.query.group_id}).then(groupMember => {
    res.json(groupMember + '\n created');
  });
});

// update
groupMembers.put('/:id', (req, res) => {
  models.groupMember.update({user_id: req.query.user_id}, {group_role_id: req.query.group_role_id}, {group_id: req.query.group_id}, {where: req.params.id}).then(groupMember => {
    res.json(groupMember + '\n updated');
  });
});

// delete
groupMembers.delete('/:id', (req, res) => {
  models.groupMember.findById(req.params.id).then(groupMember => {
    groupMembers.destroy().then(() => {
      res.json(groupMember + '\n deleted');
    });
  });
});

module.exports = {controller: groupMembers, route: '/groupMembers'};
