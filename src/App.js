import logo from './logo.svg';
import './App.css';
import SingleTodo from './components/SingleTodo';


let toDos = [
  { id: 1, toDo: "Walk the garabage", completed: "false" },
  { id: 2, toDo: "Cook the laundry", completed: "false" },
  { id: 3, toDo: "Slaughter your enemies", completed: "false" },
];


function App() {
  return (
    <div className="App">
     <h1>To Do List</h1>
     <SingleTodo toDos={toDos}/>
     <SingleTodo toDos={toDos}/>
    {/* {toDos.map(todo => <SingleTodo toDos={toDos}/>)} */}
    </div>
  );
}

export default App;
