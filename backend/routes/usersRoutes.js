const express   = require('express')
const router    = express.Router()
const { registerUser, loginUser, getMeAccess } = require('../controllers/usersController')

router.post('/', registerUser)

router.post('/login', loginUser)

router.post('/me', getMeAccess)

module.exports = router