const db = require('../models')
//crud routes here

const index = (req,res) =>{
    db.Game.find({}, (error, games) =>{
        if (error) return res.status(400).json({error: error.message})

        return res.status(200).json({
            games,
            requestedAt: new Data().toLocaleString()
        })
    })
}

const create = (req,res) =>{
    db.Game.create(req.body, (error, createdGame) =>{
        if (error) return res.status(400).json({error: error.message})
        return res.status(200).json(createdGame)
    })
}

const update = (req,res) =>{
    db.Game.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new:true},
        (error, updatedGame) =>{
            if (error) return res.status(400).json({error: error.message})
            return res.status(200).json(updatedGame)
        }
    )
}

const destroy = (req,res) =>{
    db.Game.findByIdAndDelete(req.params.id, (error, deletedGame) =>{
        if (error) return res.status(400).json({error: error.message})

        return res.status(200).json({
            message: `Game ${deletedGame.name} deleted successfully`
        })
    })
}

module.exports = {
    index,
    create,
    update,
    destroy
}
