import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import App from "./App.jsx";
import "./index.css";

function App() {
    return <div>
        <Todo id={1} />
    </div>
}

function Todo({ id }) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todo?id=" + id)
            .then(async function (res) {
                const json = await res.json();
                setTodo(json.todo);
            })
    }, [])

    return <div>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
    </div>
}

export default App;