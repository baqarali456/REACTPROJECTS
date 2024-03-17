import { useCallback, useEffect, useState ,useRef} from 'react'
import './App.css';


function App() {
  const [length,setlength] =useState(8);
  const [numberallowed,setnumberAllowed] = useState(false);
  const [charallowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  let copypass = useRef(null);

  const handlecopy =  () =>{
    window.navigator.clipboard.writeText(password);
    copypass.current?.select();
    copypass.current?.setSelectionRange(0, 10);
  }
  

  const passwordGenerator = useCallback(()=>{
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(charallowed) alphabets+="!@#$%&^*({})[|}";
    if(numberallowed) alphabets+="0123456789";
    for (let index = 0; index < length; index++) {
      pass += alphabets[Math.floor(Math.random() * alphabets.length)]; 
    }
    setPassword(pass);
  },[length,charallowed,numberallowed])

  useEffect(()=>{
   passwordGenerator()
  },[length,numberallowed,charallowed]);


  return (
    <>
      <div className="container">
      <div className="password-box">
        <input ref={copypass} value={password} type="text" name="" id="Password"/>
        <button onClick={handlecopy} className="btn">Copy</button>
      </div>
        <div className="password-allowed">
          <input min="0" max="100"
           onChange={(e)=>setlength(e.target.value)} 
           value={length} 
           type="range"
            name=""
             id="" />
             <label >Length - {length}</label>
          <input onChange={()=>setnumberAllowed(!numberallowed)} checked={numberallowed} type="checkbox" name="" id="" /><label>Number -{numberallowed}</label>
          <input onChange={()=>setCharAllowed(!charallowed)} checked={charallowed} type="checkbox" name="" id="" /><label>char - {charallowed}</label>
        </div>
       </div>
    </>
  )
}

export default App
