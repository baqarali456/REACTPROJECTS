import React, { useState } from 'react'
import { useNotesContext } from '../context/NotesContext';

function Form() {
    
    const {addNotes,handleInput,input} = useNotesContext();

    const handleAddNotes = ()=>{
        addNotes({text:input,completed:false});
        handleInput('')
    }
  return (
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea onChange={(e)=>handleInput(e.target.value)} value={input} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button onClick={handleAddNotes} className=' btn btn-primary my-2 '>Add</button>
</div>
  )
}

export default Form
