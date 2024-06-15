import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello world"}],
    edit:false,
    input:"",
}

let index;

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:nanoid(),text:action.payload})
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        },
        editableTodo:(state,action)=>{
             index = state.todos.findIndex(todo=>todo.id === action.payload);
            state.edit = true;
            state.input = state.todos[index].text
        },
        updateTodo:(state,action)=>{
           state.todos.splice(index,1,{...state.todos,text:action.payload,id:nanoid()})
           state.edit = false; 
        },
        updateInput:(state,action)=>{
          state.input = action.payload;
        }
    }
})

export const {addTodo,removeTodo,editableTodo,updateTodo,updateInput} = todoSlice.actions

export default todoSlice.reducer;
