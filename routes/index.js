var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cidades', function(req, res, next) {
  res.render('cities/cidades');
});

router.get('/cidades/saopaulo', function(req, res, next) {
  res.render('cities/saopaulo');
});

module.exports = router;
