import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello one"}],
}

export const todoSlice  = createSlice({
    name:"todo",
    initialState,
    reducers:{
       addTodo:(state,action)=>{
        
         state.todos.push({id:nanoid(),text:action.payload});
       },
       removeTodo:(state,action)=>{
         state.todos.filter(todo=>todo.id !== action.payload);
       },
       updateTodo:(state,action)=>{
        const { id, updatedTodo } = action.payload;
        const index = state.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
       }
    }

})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;