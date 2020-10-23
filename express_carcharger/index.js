const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
const passportHttps = require('passport-http');
const port = 4000
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
app.use(cors());

app.get('/getsomething', (req, res) => {
  res.send('Requested...')
  console.log("hi");
})

const example = [4,5,6,7,8,9];

const users = [];

app.get('/example', (req, res) => {
  res.send(example)
  console.log("hey");
})

app.post('/register', (req, res) => {
  console.log(req.body);

  const passwordHash = hash = bcrypt.hashSync(req.body.password, 8);

  users.push({
    id : uuidv4(),
    username : req.body.username,
    password : passwordHash
  })

  res.sendStatus(200);
})

app.get('/users', (req, res) => {
  res.json(users);
})

// protected resource
app.get('/protectedResource', passport.authenticate('basic', { session: false }), (req, res) => {
  console.log('This is final route handler function');
  res.sendStatus(200);
});

/*app.post('/login', (req, res) => {
    res.send(users)
    console.log("may");
})*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})