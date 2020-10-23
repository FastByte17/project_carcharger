const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var cors = require('cors')
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

  users.push({
    id : uuidv4(),
    username : req.body.username,
    password : req.body.password
  })

  res.sendStatus(200);
})

app.get('/users', (req, res) => {
  res.json(users);
})

/*app.post('/login', (req, res) => {
    res.send(users)
    console.log("may");
})*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})