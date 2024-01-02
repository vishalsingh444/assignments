const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:EptrETrEpT5hxG6M@cluster0.yyzgw1e.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}