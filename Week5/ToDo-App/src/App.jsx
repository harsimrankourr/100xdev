
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

  function addTodo() {

    // creating a new value
    // react would know that it need to re-render
    // it only knows that the todos have changed
    // and update like this 

    //[1,2]
    //[...todos] => [1,2]

    //[1,2]
    //[...todos, 3] => [1,2,3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

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