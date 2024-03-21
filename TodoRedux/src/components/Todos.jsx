import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

function Todos({handleEditable}) {
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
  return (
    todos.map(todo=>(
        <li key={todo.id}>
        {todo.text}
        <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
        <button onClick={()=>{handleEditable(todo.id)}}>Edit</button>
        </li>
    ))
  )
}

export default Todos
