const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.games.index)
router.post('/', ctrls.games.create)


module.exports = router
