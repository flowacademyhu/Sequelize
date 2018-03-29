const express = require('express');
const groups = express();

const models = require('../models');

// index
groups.get('/', (req, res) => {
  models.group.findAll().then(groups => {
    res.json(groups);
  });
});

// show
groups.get('/:id', (req, res) => {
  models.group.findById(req.params.id).then(group => {
    res.json(group);
  });
});

// create
groups.post('/', (req, res) => {
  models.group.create({name: req.query.name,
    is_public: req.query.group_id,
    description: req.query.description,
    date_created: req.query.date_created}).then(group => {
    res.json(group);
    console.log('\nCreated.');
  });
});

// update
groups.put('/:id', (req, res) => {
  models.group.update({name: req.query.name,
    is_public: req.query.group_id,
    description: req.query.description,
    date_created: req.query.date_created}, {where: {id: req.params.id}}).then(group => {
    res.json(group);
    console.log('\nUpdated.');
  });
});

// delete group
groups.delete('/:id', (req, res) => {
  models.group.findById(req.params.id).then(group => {
    group.destroy().then(() => {
      res.json(group);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: groups, route: '/groups'};
