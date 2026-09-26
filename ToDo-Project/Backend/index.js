const express = require("express");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//---------------------------------------------------------------------------------
// Create Todo
//---------------------------------------------------------------------------------

app.post("/todo", async function (req, res) {

    const createPayload = req.body;

    // Validate input
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    //put it in mongodb
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

//------------------------------------------------------------------------------------
// get all the Todos
//-------------------------------------------------------------------------------------

app.get("/todos", async function (req, res) {

    const todos = await Todo.find({});

    res.json({
        todos: todos
    });
});

//------------------------------------------------------------------------------------
// Mark Todos as completed
//------------------------------------------------------------------------------------

app.put("/completed", async function (req, res) {

    const updatePayload = req.body;

    // Validate input
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    // update todo
    await Todo.updateOne(
        {
            _id: req.body.id
        }, {
        completed: true
    });
    
    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(3000);
