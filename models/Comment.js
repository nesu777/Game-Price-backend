const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {type: String, default: 'Anonymous'},
    comment: {type: String, required: true},
    gameName: {type: String}
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
