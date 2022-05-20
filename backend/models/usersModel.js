const mongoose  = require('mongoose')

const userSchema    = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Pleas a fullname']
    },
    email: {
        type: String,
        required: [true, 'Please add your email address'],
        unique: true,
    },
    uid: {
        type: String,
        required: [true, 'Please UID cannot be empty'],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Users", userSchema)