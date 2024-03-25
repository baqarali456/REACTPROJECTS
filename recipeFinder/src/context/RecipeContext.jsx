import { createContext, useContext } from "react";

export const RecipeContext = createContext({
  data:[],
  categories:[],
  filter:[],
  showfilter:false,
  handleSearch:(input)=>{},
  handlefilter:(category)=>{},
  handleshowHome:()=>{},
})

export const RecipeContextProvider = RecipeContext.Provider;

export const useRecipeContext = () =>{
    return useContext(RecipeContext)
}