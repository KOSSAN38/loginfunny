var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('login', { title: 'Buzzfed' })
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
