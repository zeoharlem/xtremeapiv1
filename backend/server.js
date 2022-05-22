const express   = require("express")
const app       = express()
const dotenv    = require('dotenv').config()
const connectDatabase = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
//app.use('/', express.static(path.resolve(__dirname, 'assets')))

app.use('/api/project', require('./routes/projectInfoRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Server started safely")
})