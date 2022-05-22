const mongoose  = require('mongoose')

const userSchema    = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please add lastname']
    },
    email: {
        type: String,
        required: [true, 'Please add your email address'],
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