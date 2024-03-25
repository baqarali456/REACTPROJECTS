import { createContext, useContext } from "react";

export const NotesContext = createContext({
  notes:[],
  addNotes:(note)=>{},
  removeNotes:(id)=>{},
  editNotes:(id)=>{},
  input:"",
  handleInput:()=>{},
  toggleNotes:()=>{},
})

export const NotesContextProvider = NotesContext.Provider;

export const useNotesContext = () =>{
    return useContext(NotesContext)
}