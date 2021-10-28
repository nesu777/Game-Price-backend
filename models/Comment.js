const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {type: String, default: 'Anonymous'},
    comment: {type: String, required: true},  
    gameId: {type: Number}
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
