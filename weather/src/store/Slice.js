import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user:{
    count:0,
    name:"Baqar"
  }
}

export const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{
     incrementCounter:(state,action)=>{
        state.user = {...state.user,count:state.user.count + 1};
     },
     decrementCounter:(state,action)=>{
        state.count = state.count - 1;
     }
    }
})

export const {incrementCounter,decrementCounter} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer