const express = require('express');
const locations = express();

const models = require('../models');

// index
locations.get('/', (req, res) => {
  models.location.findAll().then(locations => {
    res.json(locations);
  });
});

// show
locations.get('/:id', (req, res) => {
  models.location.findById(req.params.id).then(location => {
    res.json(location);
  });
});

// create
locations.post('/', (req, res) => {
  models.location.create({gps_location_lon: req.query.gps_location_lon,
    gps_location_lat: req.query.gps_location_lat,
    name: req.query.name,
    rating: req.query.rating}).then(location => {
    res.json(location + '\n created.');
  });
});

// update
locations.put('/:id', (req, res) => {
  models.location.update({gps_location_lon: req.query.gps_location_lon,
    gps_location_lat: req.query.gps_location_lat,
    name: req.query.name,
    rating: req.query.rating}, {where: {id: req.params.id}}).then(location => {
    res.json(location + '\n updated.');
  });
});

// delete
locations.delete('/:id', (req, res) => {
  models.location.findById(req.params.id).then(location => {
    location.destroy().then(() => {
      res.json(location + '\n deleted.');
    });
  });
});

module.exports = {controller: locations, route: '/locations'};
