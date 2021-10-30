const db = require('../models')

const index = (req,res) =>{
    db.Comment.find({}, (error, comments) =>{
        if (error) return res.status(400).json({error: error.message})

        return res.status(200).json(comments)
    })
}

const create = (req,res) =>{
    db.Comment.create(req.body, (error, createdComment) =>{
        if (error) return res.status(400).json({error: error.message})
        return res.status(200).json(createdComment)
    })
}

const update = (req,res) =>{
    db.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
        (error, updatedComment) =>{
            if (error) return res.status(400).json({error: error.message})
            return res.status(200).json(updatedComment)
        }
    )
}

const destroy = (req,res) =>{
    db.Comment.findByIdAndDelete(req.params.id, (error, deletedComment) =>{
        if (error) return res.status(400).json({error: error.message})

        return res.status(200).json({
            message: `Comment ${deletedComment.name} deleted successfully`
        })
    })
}

module.exports = {
    index,
    create,
    update,
    destroy
}