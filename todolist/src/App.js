import { useState } from "react";
import "./App.css";

function getlocal(){
  let getTodos = JSON.parse(localStorage.getItem("todos")) || [];
  return getTodos
}
function App() {

  // console.log(useState);
  const [text, setText] = useState("");
  let [todos, setTodos] = useState(getlocal());
  const [edit,setEdit] = useState(false);
  

  // onAdd
   let findData;
   let index;
  const handleAdd = () => {
    if(edit){
       findData = text;
       todos.splice(index,1,findData);
       localStorage.setItem("todos",JSON.stringify(todos))
       setTodos(todos);
       setText("");
       setEdit(false);
    }
   else{
     todos.push(text);
     localStorage.setItem("todos",JSON.stringify(todos))
     setTodos(todos);
     setText("");
   }
   
  };

 

  const handleDelete =(todoText) =>{
     todos = todos.filter(todo=>{
      return todo !== todoText;
    });
    localStorage.setItem("todos",JSON.stringify(todos))
    setTodos(todos);
  }

  const handleEdit = (todoText) =>{
     index = todos.findIndex(todo=>todo === todoText);
     console.log(index,"index");
     
     findData = todos.find(todo=>todo===todoText);
     console.log(findData,"findData");
    setText(todos[index])
    setEdit(true);
  }
  return (
    <>
      <nav className="flex text-white h-20 w-screen bg-sky-400">
        <ul className="flex items-center">
          <li className="mx-3 text-3xl font-extrabold text-slate-300">
            TodoList
          </li>
        </ul>
      </nav>
      <section className=" flex flex-col justify-center items-center h-screen w-screen bg-blue-900 ">
        <section className="flex" id="mid-container">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter Your Text"
          />
          <button
            onClick={handleAdd}
            className="text-white mx-2 rounded-md px-2 py-2 bg-sky-500/50"
          >
            {edit?"Edit":"Add"}
          </button>
          
        </section>
        {todos.map((todo, i) => {
          return <div key={i} className="flex flex-col my-3">
              <div className="bg-white w-80  h-7 text-black">
                <p className="text-center text-slate-800 ">{todo} 
                <i onClick={()=>handleDelete(todo)} className="px-2 cursor-pointer fa-solid fa-delete-left"></i>
                <i onClick={()=>handleEdit(todo)} className="px-2 cursor-pointer fa-solid fa-pen"></i>
                </p>
              </div>
            </div>
        })}
      </section>
    </>
  );
}

export default App;
