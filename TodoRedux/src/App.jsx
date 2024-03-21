import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editable,setEditable] = useState(false);

 
  return (
    <>
    <AddTodo  editable={editable} />
    <Todos handleEditable={()=>setEditable(!editable)}  />
    </>
  )
}

export default App
