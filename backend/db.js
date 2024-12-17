const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    title : String,
    description : String,
    complete : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {todo};