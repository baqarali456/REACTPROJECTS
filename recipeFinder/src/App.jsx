import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import { RecipeContextProvider } from './context/RecipeContext';

function App() {
  const [data,setData] = useState([])
  const [categoriesData,setCategoriesData] = useState([])
  const [categories,setCategories] = useState([])
  
  const handleSearch = (input) =>{  
      setData(categoriesData.filter(ele=>ele.strCategory === input))
    }

    const handlefilter = (category) =>{
      setData(categoriesData.filter(ele=>ele.strCategory === category))
    }

    const showData = async() =>{
     let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data = await response.json()
    setData(data.categories);
    setCategoriesData(data.categories);
     setCategories(categoriesData.map(ele=>ele.strCategory))
    }

    const handleshowHome = () => {
      showData()
    }

    

  useEffect(()=>{
    showData()
  },[]);

  return (
    <RecipeContextProvider value={{data,handleSearch,categories,handlefilter,handleshowHome}}>
    <Navbar/>
    <div className=" my-3 container d-flex flex-row flex-wrap  ">
      <Cards />
    </div>
    </RecipeContextProvider>
  )
}

export default App;
