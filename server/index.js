const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'commute_user',
  password: 'greenbean',
  database: 'commute',
})
connection.connect()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/transportation-types', (req, res) => {
  connection.query('SELECT * FROM transport_lookup', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
})

app.listen(8000, () => {
  console.log('Commute Server is listening on port 8000!')
})
