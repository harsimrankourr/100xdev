
import { useState } from "react";

function App() {

  // defining a state that react can watch

  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "study DSA from 9-11",
    completed: true
  }]);


  return (
    <div>
      <button onClick={addTodo}> Add a random todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App