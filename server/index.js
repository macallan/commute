const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'commute_user',
  password: 'greenbean',
  database: 'commute_local',
})
connection.connect()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
