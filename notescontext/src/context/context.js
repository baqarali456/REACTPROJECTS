import { createContext, useContext } from "react";

export const NoteContext = createContext({
    notes:[{id:new Date(),content:"",description:"",selected:false}],
    handleAddNotes:(content,description)=>{},
    handldeDeleteNotes:(id)=>{},
    handleSelectedDeletedNotes:()=>{},
    handleClearNotes:()=>{},
    handleCheckBoxChange:()=>{},
    handleEditNote:(id)=>{},
    edit:false,
    NoteIndex:0,
    content:"",
    description:"",
    handleContent:(value)=>{},
    handleDescription:(value)=>{},
    updateNote:(index)=>{},
    

})

export const NoteContextProvider = NoteContext.Provider;

export const useNoteContext = () => useContext(NoteContext)