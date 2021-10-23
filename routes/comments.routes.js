const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.comments.index)
router.post('/', ctrls.comments.create)
router.put('/:id', ctrls.comments.update)
router.delete('/:id', ctrls.comments.destroy)


module.exports = router