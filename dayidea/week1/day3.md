### Requirements 
- Understanding of JavaScript 
- [nodejs](https://nodejs.org/en/) installed on your machine locally 

### Technologies explored
- Introduction to [express](https://expressjs.com/en/)


### Requirements
- NodeJS installed

## To do

Inside Workspace folder create folder day3

`mkdir day3`

Enter day3 folder

`cd day3`

### Running Express

Run commands inside terminal to install express 

> 1. `npm init -y`

> 2. `npm i express`

> 3. `touch app.js`

> 4. copy and paste [Hello World Example](https://expressjs.com/en/starter/hello-world.html) 
inside app.js file
 ```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Inside your terminal type

`node app.js`

In browser go localhost:3000

### Static Files e.g html, CSS and JavaScript

Inside day3 folder - create new folder - public

`mkdir public`

Inside public paste project files from day 2.

Files 
> - index.html 
> - style.css 
> - script.js

Inside app.js remove

```
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

and add

```
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))

```

Learn more about [express.static](https://expressjs.com/en/starter/static-files.html)

The code should look more like this

 ```
const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
