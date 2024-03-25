import React, { useState } from 'react'
import { useNotesContext } from '../context/NotesContext'

function Notes() {
    const [edit,setEdit] = useState(false);
    const {input,toggleNotes,editNotes,notes,removeNotes,handleInput} = useNotesContext()
    
    
    const handleEdit = (text) =>{
        if(edit){
            editNotes(text,input)
            setEdit(false)
            handleInput('');
        }
        else{
            setEdit(!edit);
            toggleNotes(text)
            handleInput(text);
        }
    }


  return (
    notes.map(ele=>(
        <div key={ele.text} className="card mx-2  my-2 " style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{ele.text}</h5>
          <button onClick={()=>removeNotes(ele.text)} className="btn btn-primary mx-1">Remove</button>
          <button onClick={()=>handleEdit(ele.text)} className="btn btn-primary mx-1">{ele.completed?"update":"Edit"}</button>
        </div>
      </div>
    ))
  )
}

export default Notes;
