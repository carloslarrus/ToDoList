import '../sass/App.scss'
import React, { useState} from 'react'
function App() {

  // useStates
  // const [toDo, setToDo] = useState({
  //   id:0,
  //   content : ''
  // })
  const [toDo, setToDo] = useState('')
  let  [toDos, setToDos] = useState([])
  

  // functions

  // function handleChange(e){
  //   setToDo({
  //     id : Date.now(),
  //     content : e.target.value
  //   })
  // }
  function handleChange(e){
    setToDo(e.target.value)
  }
    function adding(){
    setToDos((prevState) => {
    return [...prevState, {text : toDo, status : false}]
    }) 
  }
  function deleteFunction(todo){
   let newToDo = toDos.filter((item) => item !== todo )
   setToDos(newToDo)
  }
  function doneFunction(todo){
     let doneToDo = toDos.map( (item) => {
         if(todo == item){
           return {...item, status : true}
         } else {
           return item
         }
     })
     setToDos(doneToDo)
  }
  console.log(toDos);
 
  return (
    <div className="App">
      {/* Header */}
     <div className="header">
       <h1 className="mainHeader">To Do List </h1>
       <h2 className="subHeader">A React App</h2>
     </div>
     
    {/* Adding */}
     <div className="adding">
         <div className="title">Add a todo list :</div>
         <input type="text" className="toDo" onChange = {handleChange} name='content' value={toDo.content} />
         <div className="button" onClick={adding}>+</div>
       </div>

       {/* Display */}

       <div className="display">
         { toDos.map((todo) => {
           return(
             <div className='todo'>
               <div className='text' id={todo.status ? "yes" : "no"}>{todo.text}</div>
               <div className="buttons">
                 <div className="delete" onClick = {() => deleteFunction(todo)}>Delete</div>
                 <div className="toggle" onClick = {() => doneFunction(todo)}>Done</div>
               </div>
             </div>
           )
         })}
       </div>
    </div>
  );
}

export default App;



// https://dev.to/joelynn/how-to-build-a-react-crud-todo-app-delete-todo-3jl1
