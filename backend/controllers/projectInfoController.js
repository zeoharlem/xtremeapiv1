//@desc Get Project Information
//@route GET /api/project
//@access Private 
const getProjectInfo = async(req, res) => {
    res.status(200).json({message: "Get Project Info"})
}

//@desc post Project Information
//@route POST /api/project
//@access Private 
const setProjectInfo = async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please make sure you have text sent")
    }
    res.status(200).json({message: "Post Project Info"})
}

//@desc Update Project Information
//@route PUT /api/project/:id
//@access Private 
const updateProjectInfo = async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

//@desc Get Project Information
//@route GET /api/project/:id
//@access Private 
const deleteProjectInfo = async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getProjectInfo, 
    setProjectInfo,
    updateProjectInfo, 
    deleteProjectInfo
}