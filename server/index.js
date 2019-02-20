const express = require('express')
const mysql = require('mysql')
const fs = require('fs')
const https = require('https')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'commute_user',
  password: 'greenbean',
  database: 'commute',
})
connection.connect()

const app = express()
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/transportation-types', (req, res) => {
  connection.query('SELECT * FROM transport_lookup', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });
})

// Create user
app.post('/user/new', (req, res) => {
  user = {name: req.body.name, distance: req.body.distance}
  connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  })
})

// Create commute
app.post('/commute/new', (req, res) => {
  commute = {user_id: req.body.user_id, transport_mode_id: req.body.transport_mode_id}
  connection.query('INSERT INTO commute_log SET ?', commute, (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  })
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

https.createServer({
  key: fs.readFileSync('cert/server.key'),
  cert: fs.readFileSync('cert/server.crt')
}, app).listen(port, () => {
  console.log('Commute Server is listening on port 3000!')
})
