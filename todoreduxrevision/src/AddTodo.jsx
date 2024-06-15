
import { addTodo,updateInput,updateTodo } from "./features/todoSlice";
import { useDispatch, useSelector } from "react-redux";


function AddTodo() {
    const input = useSelector(state=>state.input)
    const edit = useSelector(state=>state.edit);
    const dispatch = useDispatch()
    const handleAddTodo = (e) =>{
     e.preventDefault()
     if(edit){
       dispatch(updateTodo(input));
     }
     else{
         dispatch(addTodo(input));
     }
     dispatch(updateInput(''))
     
    }
  return (
    <div className=" w-100 h-25 mt-5">
     <form onSubmit={handleAddTodo} className=" d-flex flex-row justify-content-center align-items-center ">
        <input onChange={(e)=>dispatch(updateInput(e.target.value))} value={input} className=" p-2" type="text" name="" id="" />
        <button className=" p-2 btn btn-primary mx-2">{edit?'Edit':'Add'}</button>
     </form> 
    </div>
  )
}

export default AddTodo;
