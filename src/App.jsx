import React, { Children } from 'react'

const todos=[
  'Présenter react' ,
  'Présenter le JSX' ,
  'Créer des composants'
]
function App() {
 
  return ( 
    <div>
     <Title color="green" id="monid" className="demo" data-demo="demo">Mon composant</Title>       
    <input type='text'/>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ipsa eos deserunt, eligendi mollitia fugiat ullam sequi, facere ut perspiciatis voluptatem laborum omnis aut quae. Inventore dolorum corrupti harum eius.
    </p>
    <ul>
      {todos.map(todo=>
        <li key={todo}>{todo}</li>
      )}
    </ul>
    </div>
  )
}
function Title({color, children, ...props}){
  return(
    <h1 style={{color: color}} {...props}>{children}</h1>
  )
}

export default App