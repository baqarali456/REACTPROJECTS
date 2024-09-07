import './App.css'
import Counter from './components/Counter'


function App() {
  
  console.log("app render")

  let user = {name:"Baqar",role:"web development"}

  return (
    <>
      <Counter user={user} employeeId="baqar"   />
    </>
  )
}

export default App
