import { memo, useState,useEffect } from "react";
import Child from "./Child";


function Counter({user,employeeId}) {
      console.log("counter rendered")
      console.log(user,employeeId)
      
      const [count, setCount] = useState(0)

      function handleADD(){
        setCount(count + 1);
      }

      useEffect(()=>{
        document.title = `count ${count}`
       },[count])

    return (
        <>
            <h1 style={{textAlign:"center",backgroundColor:"black",color:"#fff"}}>
            {count}
        </h1>
        <button onClick={handleADD}>Add</button>
        <Child/>
        </>
    )
}

export default memo(Counter)
