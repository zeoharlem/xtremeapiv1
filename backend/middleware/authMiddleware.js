const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Users = require('../models/usersModel')

const protect = asyncHandler(async(req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Get token from header
            token = req.headers.authorization.split(' ')[1]
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
            //get user from the token sent
            req.user = await Users.findById(decodedToken.id).select('-password')
            next()
        } 
        catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized")
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, token expired')
    }
})

module.exports = {
    protect
}