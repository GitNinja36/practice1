const express = require("express");
import {createTodo, updateTodo} from './type'

const app = express();
app.use(express.json());

app.post("/todo", (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }
});

app.get("/todos", (req, res)=>{

});

app.put("/completed", (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }

});

const port = 8080;