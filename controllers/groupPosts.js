const express = require('express');
const groupPosts = express();
const models = require('../models');

// index
groupPosts.get('/', (req, res) => {
  models.groupPosts.findAll().then(groupPosts => {
    res.json(groupPosts);
  });
});

// show
groupPosts.get('/:id', (req, res) => {
  models.groupPosts.findById(req.params.id).then(groupPosts => {
    res.json(groupPosts);
  });
});
// create
groupPosts.post('/', (req, res) => {
  models.groupPosts.create({group_id: req.query.group_id}, {post_id: req.query.post_id}).then(groupPosts => {
    res.json(groupPosts + '\n created');
  });
});
// update
groupPosts.put('/:id', (req, res) => {
  models.groupPosts.update({group_id: req.query.group_id}, {post_id: req.query.post_id}, {where: req.params.id}).then(groupPosts => {
    res.json(groupPosts + '\n updated');
  });
});
// delete
groupPosts.delete('/:id', (req, res) => {
  models.groupPosts.findById(req.params.id).then(groupPosts => {
    groupPosts.destroy().then(() => {
      res.json(groupPosts + '\n deleted');
    });
  });
});
