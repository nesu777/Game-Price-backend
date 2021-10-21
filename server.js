//external modules
const express = require('express')

//internal modules
const routes = require('./routes')

//port !!CHANGE LATER!!
const PORT = process.env.port || 3003

//express instance
const app = express()

//db connection
require('./config/db.connection')

//use json
app.use(express.json())

app.get('/', (req, res) => {
  res.send('index route hit')
})

app.listen(PORT, ()=> {
  console.log('app is listening on port ' + PORT)
})
