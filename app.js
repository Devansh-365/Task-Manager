const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDb = require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks)

const port = 3000

const start = async () => {
    try {
        await connectDb(process.env.Mongo_Uri)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
