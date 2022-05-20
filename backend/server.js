const express   = require("express")
const app       = express()
const { errorHandler } = require('./middleware/errorMiddleware')

require('../connection/mongoose')

const res = require("express/lib/response")


app.use(express.json())
app.use(express.urlencoded({ extended: false}))
//app.use('/', express.static(path.resolve(__dirname, 'assets')))

app.use('/api/project', require('./routes/projectInfoRoutes'))

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Server started safely")
})