import React,{useState} from 'react'

function App() {
  let name = "Priyanshi";
  const [count, setCount] = useState(0);
  function print(){
    console.log(count);
    setCount(count + 1);
  }
  

  return (
    <>
      <h1>Hello {name}</h1>
      <p>POINTS</p>
      <button onClick = {print}>Click</button>
      <p>{count}</p>

      
    </>
  )
}

export default App
