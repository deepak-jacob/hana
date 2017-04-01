const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.post('/', (req, res) => {
  const user = new User({
    email: 'jacob.deepak@yahoo.com  ',
    password: 'password',
    profile: {
      firstName: 'Deepak',
      lastName: 'Jacob',
    },
    admin: true,
  });

  user.save((err) => {
    if (err) throw err;
    console.log('User saved successfully');
    res.json({ success: true });
  });
});

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

router.post('/authenticate', (req, res) => {
  User.findOne({
    name: req.body.name,
  }, (err, user) => {
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (user.password !== req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        const token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440, // expires in 24 hours
        });
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token,
        });
      }
    }
  });
});


module.exports = router;

