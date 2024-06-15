import { useDispatch, useSelector } from "react-redux"
import { removeTodo,editableTodo } from "./features/todoSlice"
function Todos() {
   const todos = useSelector(state=>state.todos)
   
   const dispatch = useDispatch()
   const handleDelete = (id) => {
       dispatch(removeTodo(id))
   }
   const handleEdit = (id) =>{
     dispatch(editableTodo(id))
   }
  return (
    <div className=" d-flex flex-column ">
      {
        todos.map(todo=>(
         <p key={todo.id}>{todo.text} 
         <button onClick={()=>handleDelete(todo.id)}>X</button>
         <button onClick={()=>handleEdit(todo.id)}>Edit</button>
         </p>           
        ))
      }
    </div>
  )
}

export default Todos
