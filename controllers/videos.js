const express = require('express');
const videos = express();
const models = require('../models');

// Index-All:
videos.get('/', (req, res) => {
  models.video.findAll().then(videos => {
    res.json(videos);
  });
});

// Show one:
videos.get('/:id', (req, res) => {
  models.video.findById(req.params.id).then(video => {
    res.json(video);
  });
});

// Create:
videos.post('/', (req, res) => {
  models.video.create({ url: req.query.url, length: req.query.length, quality: req.query.quality, format: req.quality.format }).then(video => {
    res.json(video + '\n created.');
  });
});

// Update:
videos.put('/:id', (req, res) => {
  models.video.update({ url: req.query.url, length: req.query.length, quality: req.query.quality, format: req.quality.format }, {
    where: { id: req.params.id }.then(video => {
      res.json(video + '\n updated.');
    })
  });
});

// Delete:
videos.delete('/:id', (req, res) => {
  models.video.findById(req.params.id).then(video => {
    videos.destroy().then(() => {
      res.json(video + '\n deleted.');
    });
  });
});

module.exports = {controller: videos, route: '/videos'};
