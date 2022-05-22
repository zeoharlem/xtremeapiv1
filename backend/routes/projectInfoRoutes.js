const express   = require('express')
const router    = express.Router()
const path      = require('path')
const multer    = require('multer')
const { getProjectInfo, createProjectInfo, updateProjectInfo, deleteProjectInfo } = require('../controllers/projectInfoController')
const { protect } = require('../middleware/authMiddleware')

const storageConfig = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "images")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const uploadMultiPartForm = multer({
    storage: storageConfig
})


router.route('/').get(protect, getProjectInfo).post(protect, uploadMultiPartForm.single('xtreme_image'), createProjectInfo)

router.route('/:id').put(protect, updateProjectInfo).delete(protect, deleteProjectInfo)

router.post('/image')

module.exports = router