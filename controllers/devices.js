const express = require('express');
const devices = express();
const models = require('../models');

// index
devices.get('/', (req, res) => {
  models.device.findAll().then(devices => {
    res.json(devices);
  });
});

// show device
devices.get('/:id', (req, res) => {
  models.device.findById(req.params.id).then(device => {
    res.json(device);
  });
});

// create device
devices.post('/', (req, res) => {
  models.device.create({type: req.query.type}).then(device => {
    res.json(device);
    console.log('\nCreated.');
  });
});

// update device
devices.put('/:id', (req, res) => {
  models.device.update({type: req.query.type}, {where: {id: req.params.id}}).then(device => {
    res.json(device);
    console.log('\nUpdated.');
  });
});

// delete device
devices.delete('/:id', (req, res) => {
  models.device.findById(req.params.id).then(device => {
    device.destroy().then(() => {
      res.json(device);
      console.log('\nDeleted.');
    });
  });
});

module.exports = {controller: devices, route: '/devices'};
