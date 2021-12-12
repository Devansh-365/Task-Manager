const getAllTasks = (req,res) => {
    res.send('Get All items')
}

const getTask = (req,res) => {
    res.send('Get Single items')
}

const createTask = (req,res) => {
    res.send('Create task')
}

const updateTask = (req,res) => {
    res.send('Update Task')
}

const deleteTask = (req,res) => {
    res.send('Delete Task')
}

module.exports = {
    getAllTasks, getTask , createTask , updateTask , deleteTask
}

