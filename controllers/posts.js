const express = require('express');
const posts = express();
const models = require('../models');

// Index-All:
posts.get('/', (req, res) => {
  models.post.findAll().then(posts => {
    res.json(posts);
  });
});

// Show one:
posts.get('/:id', (req, res) => {
  models.post.findById(req.params.id).then(post => {
    res.json(post);
  });
});

// Create:
posts.post('/', (req, res) => {
  models.post.create({ user_id: req.query.user_id, content: req.query.content, entity_id: req.query.entity_id, entity_type: req.query.entity_type, visibility: req.query.visibility }).then(post => {
    res.json(post + '\n created.');
  });
});

// Update:
posts.put('/:id', (req, res) => {
  models.post.update({ question: req.query.question }, {
    where: { user_id: req.query.user_id, content: req.query.content, entity_id: req.query.entity_id, entity_type: req.query.entity_type, visibility: req.query.visibility }.then(post => {
      res.json(post + 'n updated.');
    })
  });
});

// Delete:
posts.delete('/:id', (req, res) => {
  models.post.findById(req.params.id).then(post => {
    posts.destroy().then(() => {
      res.json(post + '\n deleted.');
    });
  });
});

module.exports = {controller: posts, route: '/posts'};
