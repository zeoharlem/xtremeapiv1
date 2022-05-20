const mongoose  = require('mongoose')
const validator = require('validator')

const projectInfoSchema = mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength:3
    },
    company_name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 2
    },
    website_link: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength:3
    },
    designation: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength:2
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength:5
    },
    phone_number: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength:8
    },
    company_address: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 5
    },
    back_content: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 5
    },
    number_of_cards: {
        type: Number,
        required: true,
        trim: true,
        default: 0, 
        min:1
    },
    uid: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports  = mongoose.model("ProjectInfo", projectInfoSchema)