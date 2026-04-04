import { useState } from 'react'
import './App.css'

function App() {

  let [counter, surajcounter] = useState(15);

  //let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    if(counter === 20){
      return;
    }
    surajcounter(counter + 1);
    console.log("clicked", counter);
  }

  const removeValue = () => {
    if(counter === 0){
      return;
    }
    surajcounter(counter - 1);
    console.log("clicked", counter);
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remvoe Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
