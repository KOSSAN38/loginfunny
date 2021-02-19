const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { query } = require('../models/db');
const { body, validationResult } = require('express-validator');
const authcontroller = require('../controllers/authcontroller');




/* GET users listing. */
router.get('/', authcontroller.show);



router.get('/kryptan/:pwd', function (req, res, next) {

  const myPlaintextPassword = req.params.pwd;

  bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
    // Store hash in your password DB.
    res.json({
      pwd: hash
    });
  });
});




router.post('/',
  body('username').notEmpty().trim(),
  body('password').notEmpty(),
  authcontroller.store
);

module.exports = router;
