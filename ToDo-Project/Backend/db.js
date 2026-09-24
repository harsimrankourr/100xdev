const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://harsimrankour48_db_user:X5LWDocMJgfTCSn1@cluster0.n5a7qcq.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}