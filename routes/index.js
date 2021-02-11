var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/topsekuritas', function (req, res, next) {

  if (req.session.loggedin) {
    res.send('ojsan du är nu inne');
  }
  else {
    res.send('Du måste logga in :)');
  }
});

module.exports = router;
