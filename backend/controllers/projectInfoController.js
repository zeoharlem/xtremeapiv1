const asyncHandler = require("express-async-handler")
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
    // if(!req.body.phone_number){
    //     res.status(400)
    //     throw new Error("Please make sure you have text sent")
    // }
    const projectInfo = await ProjectInfo.create({
        fullname: "Theophilus Alamu",
        company_name: "Xtremecardz",
        website_link: "xtremecardz.com",
        email: "theophilus.alamu8@gmail.com",
        phone_number: "08034583422",
        designation: "Engineer",
        company_address: "Goshen house papa apete ibadan",
        back_content: "Authority of the master of kuvuki",
        uid: "xmklUi283748ADxJJJDFHGSxjk",
        number_of_cards: 2
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