const express = require('express');
const schools = express();
const models = require('../models');

// index
schools.get('/', (req, res) => {
  models.school.findAll().then(schools => {
    res.json(schools);
  });
});

// show
schools.get('/:id', (req, res) => {
  models.school.findById(req.params.id).then(school => {
    res.json(school);
  });
});

// create
schools.post('/', (req, res) => {
  models.school.create({name: req.query.name, location: req.query.location}).then(school => {
    res.json(school + '\n created');
  });
});

// update
schools.put('/:id', (req, res) => {
  models.school.update({name: req.query.name, location: req.query.location}, {where: {id: req.params.id}}).then(school => {
    res.json(school + '\n updated');
  });
});

// delete
schools.delete('/:id', (req, res) => {
  models.school.findById(req.params.id).then(school => {
    school.destroy().then(() => {
      res.json(school + '\n deleted');
    });
  });
});

module.exports = {controller: schools, route: '/schools'};
