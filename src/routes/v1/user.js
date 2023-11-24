const express = require('express')

const {
    get
} = require('../../controller/userController')
const router = express.Router()

router.get('/', get);
module.exports = router