import { useState } from "react"

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <count count={count} setCount={setCount} />
        </div>
    )
}

function Count({ count }) {
    return <div>
        {count}
        <Button count={count} setCount={setCount} />
    </div>
}

function Buttons({ count, setCount }) {
    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1)
        }}>Decrease</button>

    </div>

}

export default App