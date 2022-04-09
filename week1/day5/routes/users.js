var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  const user = req.body.username
  const pass = req.body.password
  let loginResult = login(user, pass)

  if (loginResult) {
    res.render('users', { user });
  }
  else {
    res.render('index', { error: true });
  }

})

module.exports = router;
