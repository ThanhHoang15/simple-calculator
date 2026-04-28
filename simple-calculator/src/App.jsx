import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [operation, setOperation] = useState(null);

  const addNumber = () => {
    setResult(result + Number(userInput))
    setUserInput("");
    setOperation("add");
  }

  const subtractNumber= () => {
    if (result === 0){
      setResult(Number(userInput));
    }
    else{
      setResult(result - Number(userInput))
      }
    setOperation("subtract");  
    setUserInput("")
  }

  const equal = () => {
    if (operation === "add"){
      setResult(result + Number(userInput))
    }
    else if (operation === "subtract"){
      setResult(result - Number(userInput))
    }
    setUserInput("")
  }

  const resetNumber = () => {
    setResult(0);
    setUserInput("");
  
  }

  return (
    <>
      <h1>{result}</h1>
      <input 
      type="number"
      value={userInput}
      onChange={e => setUserInput(e.target.value)}
      />
      <button onClick={addNumber}>add</button>
      <button onClick={resetNumber}>reset</button>
      <button onClick = {subtractNumber}>subtract</button>
      <button onClick = {equal}>equal</button>
    </>
  )
}

export default App
