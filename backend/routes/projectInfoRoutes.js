const express   = require('express')
const router    = express.Router()
const { getProjectInfo, createProjectInfo, updateProjectInfo, deleteProjectInfo } = require('../controllers/projectInfoController')

router.route('/').get(getProjectInfo).post(createProjectInfo)

router.route('/:id').put(updateProjectInfo).delete(deleteProjectInfo)

module.exports = router