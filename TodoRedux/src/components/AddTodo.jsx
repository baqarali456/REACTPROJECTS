import { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";



function AddTodo() {
    const [input,setInput] = useState("");
     const dispatch = useDispatch();

    const add = (e)=>{
           e.preventDefault();
           if(input){
               dispatch(addTodo(input));
            }
            setInput('');
    }
  return (
    <form onSubmit={add}>
      <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
      <button>AddTodo</button>
    </form>
  )
}

export default AddTodo
