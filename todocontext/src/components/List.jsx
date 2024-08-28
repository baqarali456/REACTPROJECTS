import { useTodoContext } from "../context/todolistContext"


const List = () => {
  const {todos,handleDeleteTodos,handleEdit} = useTodoContext()
  console.log(todos)
  
  return (
    <ul className=' w-96 h-64 items-center justify-center flex flex-col list-none text-2xl italic text-white mt-4  '>
      {
        todos.map(todo=>{
          const {id,text} = todo
          return <li key={id} className=' py-2 '>{text} 
       <button
        onClick={(e)=>{
         e.stopPropagation()
         handleEdit(id)
        }}
        className=" w-16 py-1 rounded-xl ml-2  text-2xl  bg-green-300  text-black     ">Edit</button>
       <button 
       onClick={(e)=>{
        e.stopPropagation();
        handleDeleteTodos(id);
       }} 
       className="w-20 py-1 rounded-xl ml-2 text-2xl bg-red-700 text-white  text-wrap">Delete</button></li>
        })
      } 
    </ul>
  )
}

export default List
