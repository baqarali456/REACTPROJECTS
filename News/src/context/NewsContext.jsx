import { createContext,useContext } from "react";

export const NewsContext = createContext({
    news:[],
    search:(category)=>{},
    callapi:(category,size,page)=>{},
});

export const NewsContextProvider = NewsContext.Provider;

export const useNewsContext = () =>{
  return  useContext(NewsContext)
}