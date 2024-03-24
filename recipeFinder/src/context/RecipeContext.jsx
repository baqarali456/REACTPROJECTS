import { createContext, useContext } from "react";

export const RecipeContext = createContext({
  data:[],
  categories:[],
  handleSearch:(input)=>{},
  handlefilter:()=>{},
})

export const RecipeContextProvider = RecipeContext.Provider;

export const useRecipeContext = () =>{
    return useContext(RecipeContext)
}