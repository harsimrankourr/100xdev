import React, {Fragment} from "react"

function App() {
  return (
// Here we usee top level div coz if not use There will become 2 siblings 
// and React components donot return 2 siblings

    // <>
    //   <Header title="my name is harkirat" />
    //   <Header title="My name is raman" />
    // </>

    // OR

    <React.Fragment>
      <Header title="my name is harkirat" />
      <Header title="My name is raman" />
    </React.Fragment>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App