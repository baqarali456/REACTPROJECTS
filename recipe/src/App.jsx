import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Favourite from './components/Favourite'

function App() {

   const [showWishlist,setShowWishlist] = useState(false)

   const initialstate = {
    recipes:[],
    Wishlist:[],
    wishlistIndex:0,
   }

   const [state,dispatch] = useReducer(reducer,initialstate)

    function reducer(state,action){
      switch(action.type){
        case "fetchrecipes":{
          return {...state,recipes:action.data}
        }
        case "addRecipetoWishlist":{
          return {
            ...state,
            recipes:state.recipes.map(item=>item.idCategory === action.ID ? {...item,isWishlist:true} : item),
            Wishlist:[...state.Wishlist,{...action.recipe,isWishlist:true}],
            wishlistIndex:state.wishlistIndex + 1
          }
        }
        case "removeproductfromWishlist":{
          return {
            ...state,
            Wishlist:[...state.Wishlist].filter(item=>item.idCategory !== action.ID),
            recipes:state.recipes.map(recipe=>recipe.idCategory === action.ID ? {...recipe,isWishlist:false} : recipe),
            wishlistIndex:state.wishlistIndex - 1
          }
        }
      }
    }

    function handleAddtoWishlist(id){
      console.log(id)
      
       dispatch({
        type:"addRecipetoWishlist",
        ID:id,
        recipe:state.recipes.find(item=>item.idCategory === id)
       })
    }

    function removeRecipefromWishlist(id){
       dispatch({
        type:"removeproductfromWishlist",
        ID:id
       })
    }

    useEffect(()=>{
       ;(async () => {
         let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
         let data = await response.json();
         dispatch({type:"fetchrecipes",data:data.categories.map(recipe=>({...recipe,isWishlist:false}))})
         
         
         
       })()
      
    },[])
  

  return (
    <>
      <Navbar wishlistIndex={state.wishlistIndex} setShowWishlist={setShowWishlist}/>
      {!showWishlist ? <Card handleAddtoWishlist={handleAddtoWishlist} recipes={state.recipes}/> :
      <Favourite Wishlist={state.Wishlist} removeRecipefromWishlist={removeRecipefromWishlist}/>}
    </>
  )
}

export default App
