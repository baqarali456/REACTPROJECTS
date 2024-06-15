import { useState } from 'react'
import AddTodo from './AddTodo'
import './App.css'
import Navbar from './Navbar'
import Todos from './Todos'

function App() {
  
  return (
    <>
      <Navbar/>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
