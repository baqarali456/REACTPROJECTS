import { useTodoContext } from "../context/todolistContext"


const List = () => {
   
  const {todos,handleDeleteTodos,handleEdit,handleCheckChange,handleDeletedSelectedTodos,handleClearTodos} = useTodoContext()
  
  
  return (
    <>
      <ul className=' w-96 h-64 items-center justify-center flex flex-col list-none text-2xl italic text-white mt-4  '>
      {
        todos.map(todo=>{
          const {id,text,selected} = todo
          return <li key={id} className=' py-2 '>{text} 
          <input className=" ml-2  "
           value={selected} 
           checked={selected}
           onChange={()=>handleCheckChange(selected,id)}
           type="checkbox" 
          name="" 
          id="" />
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
    <button onClick={handleDeletedSelectedTodos} className=" mt-2 bg-red-400 px-2 py-1   text-center text-pretty rounded-2xl font-serif   "> Delete Selected Todo</button>
    <button className=" mt-2 bg-red-700 px-2 py-1   text-center text-pretty rounded-2xl font-serif  " onClick={handleClearTodos}>Clear All</button>
    </>
  )
}

export default List
