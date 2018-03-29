const express = require('express');
const users = express();
const models = require('../models');

// Index-All:
users.get('/', (req, res) => {
  models.user.findAll().then(users => {
    res.json(users);
  });
});

// Show one:
users.get('/:id', (req, res) => {
  models.user.findById(req.params.id).then(user => {
    res.json(user);
  });
});

// Create:
users.post('/', (req, res) => {
  models.user.create({ name: req.query.name, e_mail: req.query.e_mail, phone: req.query.phone, gender: req.quality.gender, username: req.query.username, date_of_b: req.query.date_of_b, birth_place: req.query.birth_place, address: req.query.address, religion_id: req.query.religion_id }).then(user => {
    res.json(user + '\n created.');
  });
});

// Update:
users.put('/:id', (req, res) => {
  models.user.update({ name: req.query.name, e_mail: req.query.e_mail, phone: req.query.phone, gender: req.quality.gender, username: req.query.username, date_of_b: req.query.date_of_b, birth_place: req.query.birth_place, address: req.query.address, religion_id: req.query.religion_id }, {
    where: { id: req.params.id }.then(user => {
      res.json(user + '\n updated.');
    })
  });
});

// Delete:
users.delete('/:id', (req, res) => {
  models.user.findById(req.params.id).then(user => {
    users.destroy().then(() => {
      res.json(user + '\n deleted.');
    });
  });
});

module.exports = {controller: users, route: '/users'};
