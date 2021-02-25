const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const registercontroller = require('../controllers/registercontroller');

/* GET da login */
router.get('/', registercontroller.show);

/*post da login*/

router.post('/',

  body('username').notEmpty().trim().toLowerCase(),
  body('email').notEmpty().isEmail().trim().toLowerCase(),
  body('password').notEmpty(),
  body('passwordconfirmed').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('ditt lösenord stämmer inte överens!');
    }
    return true;
  }),
  registercontroller.store
);

module.exports = router;
