const asyncHandler = require("express-async-handler")
const multer = require('multer')
const ProjectInfo = require('../models/projectInfoModel')


//@desc Get Project Information
//@route GET /api/project
//@access Private 
const getProjectInfo = asyncHandler(async(req, res) => {
    const projectInfo = await ProjectInfo.find()
    res.status(200).json(projectInfo)
})

//@desc post Project Information
//@route POST /api/project
//@access Private 
const createProjectInfo = asyncHandler(async(req, res) => {
    req.body.image = req.file.buffer
    const projectInfo = await ProjectInfo.create({
        users: req.user.id,
        fullname: req.body.fullname,
        company_name: req.body.company_name,
        website_link: req.body.website_link,
        email: req.body.email,
        phone_number: req.body.phone_number,
        designation: req.body.designation,
        company_address: req.body.company_address,
        back_content: req.body.back_content,
        uid: req.body.uid,
        number_of_cards: req.body.number_of_cards,
        image: req.file.path,
    })
    res.status(200).json(projectInfo)
})

//@desc Update Project Information
//@route PUT /api/project/:id
//@access Private 
const updateProjectInfo = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc Get Project Information
//@route GET /api/project/:id
//@access Private 
const deleteProjectInfo = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getProjectInfo, 
    createProjectInfo,
    updateProjectInfo, 
    deleteProjectInfo
}