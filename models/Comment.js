const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {type: String, default: 'Anonymous'},
    comment: {type: String, required: true},
    timestamps: true,  
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment