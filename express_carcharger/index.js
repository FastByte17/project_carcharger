const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const port = 4000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Requested...')
})

app.post('/', (req, res) => {
    res.send('Sent...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})