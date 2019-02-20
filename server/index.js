const express = require('express')
const mysql = require('mysql')

var pool

if (process.env.DATABASE_URL) {
  pool = mysql.createPool(process.env.DATABASE_URL)
} else {
  pool = mysql.createPool({
    host: 'localhost',
    user: 'commute_user',
    password: 'greenbean',
    database: 'commute',
  })
}

const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/transportation-types', (req, res) => {
  pool.query('SELECT * FROM transport_lookup', (error, results, fields) => {
    if (error) throw error
    res.send(results)
  });
})

// Create user
app.post('/user/new', (req, res) => {
  user = {name: req.body.name, distance: req.body.distance}
  pool.query('INSERT INTO users SET ?', user, (error, results, fields) => {
    if (error) throw error
    res.send(results)
  })
})

// Create commute
app.post('/commute/new', (req, res) => {
  commute = {user_id: req.body.user_id, transport_mode_id: req.body.transport_mode_id}
  pool.query('INSERT INTO commute_log SET ?', commute, (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  })
})



app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on 3000 or whatever port heroku set')
})
