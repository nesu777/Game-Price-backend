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

module.exports = {
    index,
    create,
}
