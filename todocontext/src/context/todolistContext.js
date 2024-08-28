import { useContext } from "react";
import { createContext } from "react";


export const TodoContext = createContext({
  todos:[],
  edit:false,
  handleEdit:()=>{},
  input:"",
  handleinput:()=>{},
  handleAddTodos:()=>{},
  handleDeleteTodos:()=>{},
  updateTodo:()=>{},
  todoIndex:0,
  updateTodo:()=>{}
})

export const TodoContextProvider = TodoContext.Provider;

export function useTodoContext(){
    return useContext(TodoContext)
}