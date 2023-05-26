
const express = require('express')
const router = express.Router()
const controller = require('../controllers/itemControllers')

router.post('/', controller.itemCreate)


module.exports = router;


