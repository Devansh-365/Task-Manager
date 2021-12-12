const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Devansh:8mVFbhY53HaDFcf@taskmanager.igqba.mongodb.net/Task-Manager?retryWrites=true&w=majority'

const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the Db...")).catch((err) => console.log(err))
}

module.exports = connectDb