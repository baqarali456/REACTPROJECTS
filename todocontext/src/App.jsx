

import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import List from './components/List'
import {TodoContextProvider} from "./context/todolistContext"

function App() {

  const [todos,setTodos] = useState([])
  const [input,setInput] = useState("")
  const [edit,setEdit] = useState(false)
  const [todoIndex,setTodoIndex ] = useState(0)
  
  const handleAddTodos = (datafield) => {
    setTodos(prev=>[...prev,{id:Math.round(Math.random() * 1000000 + 1 ),text:datafield}])
  }

  const handleDeleteTodos = (id) =>{
    setTodos(prev=>prev.filter(item=>item.id !== id))
  }

  const handleinput= (e) =>{
   setInput(e)
  }

  const updateTodo = () =>{
      todos.splice(todoIndex,1,{...todos[todoIndex],text:input})
      setTodos(todos);
  }


  const handleEdit = (i) =>{
    setEdit(true)
     let index = todos.findIndex(todo=>todo.id === i)
     setTodoIndex(index)
     setInput(todos[todoIndex].text)
   
  }

  const changeEdit = (value) =>{
   setEdit(value)
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
    console.log("data save in local Storage")
    
  },[todos])
  
  useEffect(()=>{
    if(todos && todos.length){
      const todos = JSON.parse(
        localStorage.getItem("todos")
      )
      console.log("get data from local Storage",todos)
      
      setTodos(todos)
   }
  },[])

  return (
    <TodoContextProvider value={{todos,handleAddTodos,handleDeleteTodos,handleinput,input,edit,handleEdit,todoIndex,updateTodo}}>
      <div className=' bg-blue-600 flex flex-col justify-center items-center h-screen '>

    
<div className='flex flex-row  items-center justify-center '>
  <Input />
  <Button changeEdit={changeEdit} />
</div>
  <List/>
</div>
    </TodoContextProvider>
  )
}

export default App
