const express   = require('express')
const router    = express.Router()
const { registerUser, loginUser, getMeAccess } = require('../controllers/usersController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)

router.post('/login', loginUser)

router.post('/me', protect, getMeAccess)

module.exports = router