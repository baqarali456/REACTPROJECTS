import { createContext,useContext } from "react";

export const EcommContext = createContext({
  products:[],
  cart:[],
  handleAddproductinCart:()=>{},
  handleRemoveproductinCart:()=>{},
  handleAddproductinWishlist:()=>{},
  handleRemoveproductinWishlist:()=>{},
  wishlist:[],
  countofCart:0,
  countofWishlist:0,
})

export const EcommProvider = EcommContext.Provider;

export function useEcommContext(){
    return useContext(EcommContext)
}