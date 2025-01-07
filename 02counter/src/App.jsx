import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  const addValue = () => {
    if(counter<25)
    setCounter(counter + 1)
    // setCounter((prevCounter => prevCounter + 1))
    // setCounter((prevCounter => prevCounter + 1))

  }
  const removeValue = () => {
    if(counter>0)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Basics {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
