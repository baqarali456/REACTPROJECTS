import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import { RecipeContextProvider } from './context/RecipeContext';

function App() {
  const [data,setData] = useState([]);
  const [categories,setcategories] = useState([])
  let allcategories = data.map(ele=>ele.strCategory);

  
  
 
  
  const handleSearch = (input) =>{
    if(input){
      setData(prev=>prev.filter(ele=>ele.strCategory === input))
    }
    }

    const handlefilter = (category) =>{
      let newData = [...data].filter(ele=>ele.strCategory === category)
      setData(newData)
      
    }
   
    
    
    

  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>res.json())
    .then(data=>setData(data.categories));
    
    setcategories(allcategories)
   
  },[]);

  

  

  return (
    <RecipeContextProvider value={{data,handleSearch,categories,handlefilter}}>
    <Navbar/>
    <div className=" my-3 container d-flex flex-row flex-wrap  ">
    
      <Cards />
    </div>
    </RecipeContextProvider>
  )
}

export default App
