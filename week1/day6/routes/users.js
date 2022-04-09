var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const users = require('../data').userDB;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async (req, res) => {
  try{
     let user = users.find((data) => req.body.username === data.user)
  if (!user) {
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    
    let newUser = {
        id: Date.now(),
        user: req.body.username,
        password: hashPassword
    };
    users.push(newUser);
    console.log('User list', users )
  } else {
    res.render('index', { error: true });
  }
  } catch
  {

  }
})

router.post('/login', async (req, res, next) => {
  try {
    let user = users.find((data) => req.body.username === data.user)
  if (user) {
    let submittedPass = req.body.password
    let storedPass = user.password

    const passmatch = bcrypt.compare(submittedPass, storedPass)
    if (passmatch) {
      res.render('users', { user });
    } else{
      res.render('index', { error: true });
    }
  }
  
  } catch (error) {
    
  }
  
})

module.exports = router;
