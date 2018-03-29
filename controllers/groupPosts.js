const express = require('express');
const groupPosts = express();
const models = require('../models');

// index
groupPosts.get('/', (req, res) => {
  models.groupPost.findAll().then(groupPosts => {
    res.json(groupPosts);
  });
});

// show
groupPosts.get('/:id', (req, res) => {
  models.groupPost.findById(req.params.id).then(groupPost => {
    res.json(groupPosts);
  });
});
// create
groupPosts.post('/', (req, res) => {
  models.groupPost.create({group_id: req.query.group_id}, {post_id: req.query.post_id}).then(groupPost => {
    res.json(groupPost + '\n created');
  });
});
// update
groupPosts.put('/:id', (req, res) => {
  models.groupPosts.update({group_id: req.query.group_id}, {post_id: req.query.post_id}, {where: req.params.id}).then(groupPost => {
    res.json(groupPost + '\n updated');
  });
});
// delete
groupPosts.delete('/:id', (req, res) => {
  models.groupPost.findById(req.params.id).then(groupPost => {
    groupPost.destroy().then(() => {
      res.json(groupPost + '\n deleted');
    });
  });
});

module.exports = {controller: groupPosts, route: '/groupPosts'};
