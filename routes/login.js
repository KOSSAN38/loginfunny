const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { query } = require('../models/db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('login', { title: 'Buzzfed' })
});

router.get('/kryptan/:pwd', function (req, res, next) {

  const myPlaintextPassword = req.params.pwd;

  bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
    // Store hash in your password DB.
    res.json({
      pwd: hash
    });
  });
});

router.post('/', function (req, res, next) {

  console.log(req.body);


  const username = req.body.username;
  const password = req.body.password;

  if (password == "dinmamma") {
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect('/topsekuritas');

  } else {

    res.render('/login',
      {
        title: 'busfed',
        error: 'Det blev fel!'
      });
  }

});

module.exports = router;
