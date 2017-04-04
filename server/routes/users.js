const express = require('express');
const User = require('mongoose').model('User');

const router = express.Router();

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

module.exports = router;

