import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./Slice";


export const store = configureStore({
  reducer:weatherReducer
})