var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  if (req.session.loggedin) {
    res.send('ojsan du är nu inne');
  }
  else {
    res.send('Please login to view this page!');
  }
});



module.exports = router;
