import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState([{
    title:"Go to gym",
    description :" Go to GYm 7-10",
    completed :false
  },{
    title:"study",
    description :" Study DSA",
    completed :true
  },
  {
    title:"Rest",
    description :" playing Squad Buster with shruti",
    completed :true
  },]);
  function addTodo(){
    setTodos([...todos,{
      title:"new title",
      description :"new desc"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>add a random Todo</button>
      {
        todos.map(function(todo){
          return <Todo title ={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )
}

function Todo (props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}

export default App
