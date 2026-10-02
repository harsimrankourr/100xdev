import { useState } from "react";
import { useEffect } from "react";

function App() {
    const [todos, setTodos] = useState([])

    // Wrapping the fetch call in the useEffect and we ensure this will called only once

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(async function (res) {
                const json = await res.json();
                setTodos(json.todos);
            })
    }, []) // Dependency array [] will be the set of conditions under which we want fetch go to run
    // Dependency array : When should the callback funciton run
    // Dependency array takes state variable as input
    // and anytime this state variable change this code re runs

    return <div>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
}

function Todo({ title, description }) {
    return <div>
        <h1>
            {title}
        </h1>
        <h4>
            {description}
        </h4>
    </div>
}

export default App;