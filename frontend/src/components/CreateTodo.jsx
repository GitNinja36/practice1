import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <>
        <input 
            type="text" 
            style={{padding:"0.7rem", margin: "1rem"}} 
            placeholder="title" 
            onChange={(e)=>{
                const value  = e.target.value;
                setTitle(value);
            }}
        />
        <br /><br />
        <input 
            type="text" 
            style={{padding:"0.7rem", margin: "1rem"}} 
            placeholder="description" 
            onChange={(e)=>{
                const value  = e.target.value;
                setDescription(value);
            }}
        />
        <br /><br />
        <button 
            style={{padding:"0.5rem", margin: "0.5rem"}} 
            onClick={()=>{
                fetch("http://localhost:8080/todo", {
                    method: "POST",
                    body :JSON.stringify({
                        title: title,
                        description : description
                    }),
                    headers: {
                        "content-type" : "application/json"
                    }
                })
                    .then(async (res)=>{
                        const json = await res.json();
                        alert("Todo added");
                    })
        }}>Add todo</button>
        </>
    )
}