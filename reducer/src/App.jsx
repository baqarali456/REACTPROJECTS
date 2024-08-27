import { useEffect, useReducer } from 'react'

import './App.css'

function App() {

  const initialState = [0,0,0];

   const [state,dispatch] = useReducer(reducer,initialState)

    function reducer(state,action){
     switch (action.type) {
      case "increment":
        return state.map((element,i)=>i === action.Index?element + 1 : element)
     }
    }

    function handleIncrement(i){
       dispatch({type:"increment",Index:i})
    }
    
     

  useEffect(()=>{
    document.title = `state ${state} is change`
  },[state])
  
  return (
    <>
       {
        state.map((element,i)=><button onClick={()=>handleIncrement(i)} key={i}>Count -{element}</button>)
       }
    </>
  )
}

export default App
