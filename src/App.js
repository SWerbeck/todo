import logo from './logo.svg';
import './App.css';
import SingleTodo from './components/SingleTodo';
import { useState } from 'react';


let toDos = [
  { id: 1, toDo: "Walk the garabage", completed: "false" },
  { id: 2, toDo: "Cook the laundry", completed: "false" },
  { id: 3, toDo: "Slaughter your enemies", completed: "false" },
];


function App() {

  const [newToDos, setToDos] = useState("")
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) =>{
    setNewTask(event.target.value)
  }

  const addTask = () => {
    
    setToDos([...toDos, toDos.push({id: toDos.length+1, toDo: newTask, completed: "false"})])
  }


  return (
    
    <div className="App">
      
     <h1>To Do List</h1>
     <input onChange={handleChange}/>
     <button onClick={addTask}>add task</button>
     <SingleTodo toDos={toDos}/>
   
    </div>
  );
}

export default App;
