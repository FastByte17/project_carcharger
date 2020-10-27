const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const passportHttp = require('passport-http');
const port = 4000
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
app.use(cors());

const chargers = require('./locations.json');
const users = [];

app.get('/chargers_locations', (req, res) => {
  res.send(chargers)
})

app.post('/register', (req, res) => {
  console.log(req.body);

  const passwordHash = bcrypt.hashSync(req.body.password, 8);

  users.push({
    id: uuidv4(),
    username: req.body.username,
    password: passwordHash
  })

  res.sendStatus(200);
})

app.get('/users', (req, res) => {
  res.json(users);
})

passport.use(new passportHttp.BasicStrategy(function (username, password, done) {
  const userResult = users.find(user => user.username === username);
  if (userResult == undefined) {
    return done(null, false);
  }

  if (bcrypt.compareSync(password, userResult.password) == false) {
    return done(null, false);
  }

  done(null, userResult);

}));

app.post('/login', passport.authenticate('basic', { session: false }), (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})