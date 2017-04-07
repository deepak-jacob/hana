const express = require('express');
const User = require('mongoose').model('User');

const router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

module.exports = router;

