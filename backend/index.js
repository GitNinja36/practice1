require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const {createTodo, updateTodo} = require('./type.js');
const {todo} = require('./db.js');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;
const MONGO_URL = process.env.MONGO_URL;


app.post("/todo", async(req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }
    await todo.create({
        title : createPayload.title,
        description  : createPayload.description,
        complete : false
    })
    res.json({
        msg : "TODO created"
    })
});

app.get("/todos", async(req, res)=>{
    const todos = await todo.find({});
    console.log(todos);
    res.json({
        todos
    })
});

app.put("/completed", async(req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }
    await todo.update({
        _id: req.body._id
    },{
        complete : true 
    })
    req.json({
        msg:"todo marked as completed"
    })
});


app.listen(PORT, ()=>{
    console.log(`backend is working at port ${PORT}`);
    mongoose.connect(MONGO_URL);
    console.log("Database Connected!!");
})