import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:8080/todos")
    .then(async (res) =>{
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <>
    <CreateTodo/>
    <Todos todos={todos}/>
    </>
  )
}

export default App
