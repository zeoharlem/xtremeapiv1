const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Users = require('../models/usersModel')

//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    const { fullname, email, password, uid } = req.body
    if(!fullname || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }
    const checkUserExist = await Users.findOne({email})
    if(checkUserExist){
        res.status(400)
        throw new Error('User already existed')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    //Create user
    const userCreated = await Users.create({
        fullname, email, password: hashPassword, uid
    })

    if(userCreated){
        res.status(201).json({
            _id: userCreated.id,
            fullname:userCreated.fullname,
            email: userCreated.email,
            uid: userCreated.uid,
            token: generateJwt(userCreated._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})

//@route POST /api/login
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id, 
            fullname: user.fullname, 
            email: user.email, 
            token: generateJwt(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid username or password")
    }
})

//@route POST /api/users/me
//@access Public
const getMeAccess = asyncHandler(async(req, res) => {
    res.json({message: 'User Display Detais'})
})

//Generate JWT
const generateJwt = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMeAccess
}