
function App() {
    return <div>
        <CardWrapper innerComponent = {<TextComponent/>} />
        <CardWrapper innerComponent = {<TextComponent2/>} />
    </div>
}

function CardWrapper({innerComponent}) {
    // create a div which has a border (hint: the way to create a border is : "2px solid black")
    // and inside the div, render the prop
    return <div style = {{border: "2px solid black", padding: 20}}>
        {innerComponent}
    </div>
}

function TextComponent() {
    return <div>
        hi there
    </div>
}


function TextComponen2t() {
    return <div>
        hi there 2
    </div>
}
export default App