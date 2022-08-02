var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/send', function(req, res, next) {
  res.send({"status":200,"message":"Running"})
});

module.exports = router;
