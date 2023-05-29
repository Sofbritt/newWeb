const express = require('express')
const router = express.Router()
const controller = require('../controllers/itemControllers')
const {verifyToken} = require('../utils/verifyToken')


router.post('/', verifyToken, controller.itemCreate)
router.get('/:id', controller.getOneItem)
router.get('/', controller.getItems)


module.exports = router;


