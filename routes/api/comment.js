const express = require('express')
const path = require('path')

const router = express.Router()
const commentController = require('../../controllers/commentController')

router.route('/')
    .get(commentController.getComments)
    .post(commentController.postComment)



module.exports = router