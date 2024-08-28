

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
    setTodos(prev=>[...prev,{id:Math.round(Math.random() * 1000000 + 1 ),text:datafield,selected:false}])
  }

  const handleDeleteTodos = (id) =>{
    setTodos(prev=>prev.filter(item=>item.id !== id))
  }

  const handleinput= (e) =>{
   setInput(e)
  }

  const updateTodo = () =>{
      setTodos(prev=>prev.map((item,i)=>i === todoIndex ? {...item,text:input}:item))
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


  const handleCheckChange = (e,id) =>{
  
    setTodos(prev=>prev.map(product=>product.id === id ? {...product,selected:!e} : product))

  }

  const handleDeletedSelectedTodos = () =>{
    setTodos(prev=>prev.filter(todo=>!todo.selected))
  }

  const handleClearTodos = () =>{
    setTodos([]);
  }

   useEffect(()=>{
    const localtodos = JSON.parse(localStorage.getItem("todos"))
       if(localtodos && localtodos.length){
        setTodos(localtodos)
       }
       
   },[])
  
  useEffect(()=>{
   
    localStorage.setItem("todos",JSON.stringify(todos))
   
    
  },[todos])
  
 

  return (
    <TodoContextProvider value={{todos,handleAddTodos,handleDeleteTodos,handleinput,input,edit,handleEdit,todoIndex,updateTodo,handleCheckChange,handleDeletedSelectedTodos,handleClearTodos}}>
      <div className=' bg-blue-600 flex flex-col justify-center items-center h-screen w-screen '>

    
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
