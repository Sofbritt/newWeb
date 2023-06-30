const express = require('express')
const router = express.Router()
const controller = require('../controllers/feedbackControllers.js')


router.post('/sendfeedback',controller.sendFeedBack)


module.exports = router;