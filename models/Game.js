const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  name: {type: String},
  price: {type: Number},
  onSale: {type: Boolean, default: true}
})

const Game = mongoose.model('Game', gameSchema)
module.exports = Game
