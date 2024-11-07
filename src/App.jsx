import React, { useState } from 'react'

function App() {
  const [count, setCount]=useState(0)
  const incrementer=()=>{
  setCount(count+1)
 }
  return (
    <>
    <p>Compteur: {count}</p>
    <button onClick={incrementer}>Incrementer</button>
    </> 
  )
}

export default App