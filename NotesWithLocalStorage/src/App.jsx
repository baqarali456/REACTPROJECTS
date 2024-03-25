import { useEffect, useState } from 'react'
import './App.css';

import Navbar from './components/Navbar'
import Form from './components/Form'
import Notes from './components/Notes'
import { NotesContextProvider } from './context/NotesContext'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [input,setInput] = useState('');
  

  const addNotes = (note) =>{
    setNotes(prev=>[...prev,note]);
  }

  const removeNotes = (text) =>{
    setNotes(prev=>prev.filter(ele=>ele.text !== text))
  }

  const editNotes = (text,note) =>{
    let index = notes.findIndex(ele=>ele.text === text);
     notes.splice(index,1,{...notes[index],text:note,completed:false});
     setNotes(notes); 
  }

  const toggleNotes = (text) =>{
    setNotes(prevnote=>prevnote.map(note=>note.text === text ? {...note,completed:!note.completed}:note));
  }

  const handleInput = (e) =>{
    setInput(e)
  }

  

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

  return (
    <NotesContextProvider value={{input,notes,addNotes,removeNotes,editNotes,handleInput,toggleNotes}}>
      <Navbar/>
      <div className="container my-4 ">
      <Form />
      </div>
      <div className="container d-flex  flex-row flex-wrap ">
      <Notes/>
      </div>
    </NotesContextProvider>
  )
}

export default App
