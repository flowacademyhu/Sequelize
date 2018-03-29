const express = require('express');
const workplaces = express();
const models = require('../models');

// index
workplaces.get('/', (req, res) => {
  models.workplace.Findall().then(workplaces => {
    res.json(workplaces);
  });
});

// show
workplaces.get('/:id', (req, res) => {
  models.workplace.findById(req.params.id).then(workplace => {
    res.json(workplace);
  });
});

// create
workplaces.post('/', (req, res) => {
  models.workplace.create({name: req.query.name}).then(workplace => {
    res.json(workplace);
    console.log('\nCreated.');
  });
});

// update
workplaces.put('/:id', (req, res) => {
  models.workplace.update({name: req.query.name}, {where: {id: req.params.id}}).then(workplace => {
    res.json(workplace);
    console.log('\nUpdated.');
  });
});
// delete
workplaces.delete('/:id', (req, res) => {
  models.workplace.findById(req.params.id).then(workplace => {
    workplace.destroy().then(() => {
      res.json(workplace);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: workplaces, route: '/workplaces'};
