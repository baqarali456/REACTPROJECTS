

import './App.css'
import NavBar from './components/NavBar';
import Form from './components/Form';
import Notes from './components/Notes';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [input,setInput] = useState('');
  const [edit,setEdit]  = useState(false)
  let index;
 


  const editnote = (i) =>{
    setEdit(true);
       index = notes.findIndex(note=>note.id ===i);
      setInput(notes[index].text);
   

  }

  const addNotes = (val)=>{
    if(edit){
       setNotes(prev=>prev.splice(index,1,{...notes[index],
        text:input}));
       setEdit(false)
    }
    else{
      setNotes([...notes,{...val,id:Date.now()}]);
    }
    setInput('');
  }
  

  return (
    <>
      <NavBar/>
      <div className='container  my-3  '>
      <Form edit={edit} setStateofNotes={addNotes} input={input} setStateofinput={(e)=>setInput(e)}/>
      <Notes editnote={editnote} deletenote={(i)=>setNotes(prev=>prev.filter(note=>note.id !== i))}  notes={notes}/>
      </div>
    </>
  )
}

export default App
