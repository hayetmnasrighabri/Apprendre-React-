import React, { useState } from 'react'

function App() {
  const [person, setPerson]=useState({
    firstname: 'John',
    lastname:'Doe',
    age: 18
  })
  const incrementer=()=>{
    person.age++
   setPerson({...person, age: person.age ++})
 }
  return (
    <>
    <p>Age de {person.firstname}: {person.age}</p>
    <button onClick={incrementer}>Gagner une année</button>
    </> 
  )
}

export default App