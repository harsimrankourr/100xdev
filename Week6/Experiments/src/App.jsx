
function App() {
    return <div>
        <CardWrapper>
            hi there
        </CardWrapper>

        <CardWrapper>
            hello there
        </CardWrapper>

        <CardWrapper>
            <TextComponent />
        </CardWrapper>
    </div>
}

function CardWrapper({ children }) {
    console.log(children)
    // create a div which has a border (hint: the way to create a border is : "2px solid black")
    // and inside the div, render the prop
    return <div style={{ border: "2px solid black", padding: 20 }}>
        {children}
    </div>
}

function TextComponent() {
    return <div>
        Hi there from text component
    </div>
}

export default App