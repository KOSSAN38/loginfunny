var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('login', { title: 'Buzzfed' })
});

router.post('/', function (req, res, next) {

  console.log(req.body);

  const usename = req.body.username;
  const password = req.body.password;

  if (password == "dinmamma") {
    res.send('hihihihihi');
  }

});

module.exports = router;
