const express = require('express')
const path = require('path')
const login = require('./authenticate/login')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'public/index.html'));
})

app.post('/login', function (req, res, next) {
    const user = req.body.username
    const pass = req.body.password
    let loginResult = login(user,pass)

    if(loginResult) {
      //show main content
      res.send('Hello World Again!')
    }else{
      //show error 
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})