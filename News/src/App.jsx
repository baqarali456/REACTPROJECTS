import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { NewsContextProvider } from './context/NewsContext';
import Button from './components/Button';
import Card from './components/Card';

function App() {

  const [news,setNews]  = useState([]); 
  let [index,setIndex] = useState(1);
  const [currentcategory,setcurrentCategory] = useState("entertainment");
  
  

  const handleNext = () =>{
      if(index < 14){
          // eslint-disable-next-line no-const-assign
         index = index + 1
          setIndex(index)
          callapi(currentcategory,5,index)
      }
  }
  const handlePrev = () =>{
      if(index > 1){
          setIndex(index - 1)
          callapi(currentcategory,5,index)
      }
  }

  const onCategory = (category) =>{
    setcurrentCategory(category);
      callapi(category,5,index)
  }

 

  const callapi = async(category,size=5,page=1) =>{
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5ae4245ddcbc4c58a2c855a9465ef581&pageSize=${size}&page=${page}`)
     .then(response=>response.json())
     .then(data=>data.articles.map(ele=>({...ele})))
     .then(actualdata=>setNews(actualdata))
  }

  const search = (category) =>{
    callapi(category);
  }

  useEffect(()=>{
     callapi(currentcategory,5,1);
  },[currentcategory]);
  return (
    <NewsContextProvider value={{news,search,callapi}}>
      <Navbar onCategory={onCategory}/>
      <div className=' container flex-row flex-wrap d-flex my-2  '>
        <Card/>
      </div>
      <Button handleNext={handleNext} handlePrev={handlePrev}/>
    </NewsContextProvider>
  )
}

export default App
