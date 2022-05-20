const express   = require('express')
const router    = express.Router()
const { getProjectInfo, setProjectInfo, updateProjectInfo, deleteProjectInfo } = require('../controllers/projectInfoController')

router.route('/').get(getProjectInfo).post(setProjectInfo)

router.route('/:id').put(updateProjectInfo).delete(deleteProjectInfo)

module.exports = router