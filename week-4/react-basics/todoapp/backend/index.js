const express = require('express');
const {createTodo, updateTodo} = require("./types")
const { todo } = require("./db")
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPlayload = req.body;
    const parsedPayload = createTodo.safeParse(createPlayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }   
    
    await todo.create({
        title: createPlayload.title,
        description: createPlayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const createPlayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPlayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

})

app.listen(3000);