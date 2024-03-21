
import React from "react";
export default function Form({edit,setStateofNotes,input,setStateofinput}) {  
  return (
    <div className="mb-3 d-flex flex-column align-items-center ">
  <label htmlFor="exampleFormControlTextarea1" className="form-label fs-1  text-bg-success bg-success my-2 ">Create Notes</label>
  <input value={input} onChange={(e)=>setStateofinput(e.target.value)} className="form-control py-4" id="exampleFormControlTextarea1"/>
  <button onClick={()=>{setStateofNotes({text:input})}} className="btn btn-danger my-2">{edit?"Edit Notes":"Add Notes"}</button>
</div>
  )
}
