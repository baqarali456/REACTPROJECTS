import { TodoProvider } from './contexts'
import './App.css'
import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';



function App() {
   const [Todos,setTodos] = useState([]);

   const addTodo = (todo) =>{
    setTodos(prev=>[...prev,todo]);
   }

   const deleteTodo = (id) =>{
    setTodos(prev=>prev.filter(todoitem=>todoitem.id !== id));
   }

   const updateTodo = (id,todo) =>{
    setTodos(prev=>prev.map(todoitem=>todoitem.id === id?
      todo:todoitem))
   }

   const toggleComplete = (id) =>{
    setTodos(prev=>prev.map(todoitem=>todoitem.id === id ? 
     {...todoitem,completed:!todoitem.completed}: todoitem))
   }

   useEffect(()=>{
    const Todos = JSON.parse(localStorage.getItem("todos"));
    if(Todos && Todos.length > 0){
      setTodos(Todos)
    }
   },[]);

   useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(Todos))
   },[Todos]);


  return (
    <TodoProvider value={{Todos,toggleComplete,updateTodo,addTodo,deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map(todo=>(
                          <div key={todo.id}>
                          <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
