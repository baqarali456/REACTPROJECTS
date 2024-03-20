import { useContext, useState } from "react"
import UserContext from "../context/UserContext";


function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleLogin = () =>{
        setUser(username);
    }

  return (
    <>
    <h2>Login</h2>
      <label>Username</label><input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" />
      <label >Password</label><input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" />
      <button onClick={handleLogin}>Submit</button>
    </>
  )
}

export default Login
