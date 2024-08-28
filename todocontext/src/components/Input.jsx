import { useState } from "react"
import { useTodoContext } from "../context/todolistContext"


const Input = () => {
  const {input,handleinput} = useTodoContext()
  return (
    <input
    onChange={(e)=>handleinput(e.target.value)} 
    value={input} 
    placeholder="Enter Here For Something" 
    className=" text-2xl pl-1  w-80 font-serif " 
    type="text" 
    name="" 
    id="" />
  )
}

export default Input
