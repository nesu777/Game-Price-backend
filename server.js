//external modules
const express = require('express')
const cors = require('cors')

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
app.use(express.urlencoded({extended:true}))

//cors
const whiteList = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback){
    if (whiteList.indexOf(origin) !== -1 || !origin){
      callback(null,true)
    }else {
      callback (new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('index route hit')

})

// Routes
app.use('/games', routes.games)

app.listen(PORT, ()=> {
  console.log('app is listening on port ' + PORT)
})
