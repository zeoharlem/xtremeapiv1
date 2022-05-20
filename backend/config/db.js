const mongoose  = require('mongoose')

const connectDatabase = async() => {
    try {
        const connection = await mongoose.connect('mongodb://localhost/xtremecardz')
        console.log(`Mongo Db connected: ${connection.connection.host}`)
    } 
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDatabase