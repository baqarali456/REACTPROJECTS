

import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { EcommProvider } from './context/ecommContext'
import { Outlet } from 'react-router-dom'

function App() {

  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([])
  const [wishlist,setWishlist] = useState([])
  const [countofCart,setCountofCart] = useState(0)
  const [countofWishlist,setCountofWishlist] = useState(0)

  const handleAddproductinCart = (i,product) =>{
    setCountofCart(countofCart + 1)
    setCart(prev=>[...prev,{...product,inCart:true}])
    setProducts(prev=>prev.map(product=>(
      product.id === i ? {...product,inCart:true} : product)
    ))
  }
  
  const handleAddproductinWishlist = (i,product) =>{
    setCountofWishlist(countofWishlist + 1)
    setWishlist(prev=>[...prev,{...product,inWishlist:true}])
    setProducts(prev=>prev.map(product=>(
      product.id === i ?  {...product,inWishlist:true} : product)
    ))
  }
  
  const handleRemoveproductinCart = (i) =>{
    setCountofCart(countofCart - 1)
    setCart(prev=>prev.filter(product=>product.id !== i))
    setProducts(prev=>prev.map(product=>product.id === i?{...product,inCart:false}:product))
  }
  
  const handleRemoveproductinWishlist = (i) =>{
    setCountofWishlist(countofWishlist - 1)
   setWishlist(prev=>prev.filter(product=>product.id !== i))
   setProducts(prev=>prev.map(product=>product.id === i?{...product,inWishlist:false}:product))
  }
 

  useEffect(()=>{
   ;(async () => {
      let response = await fetch('https://fakestoreapi.com/products')
      let data = await response.json()
      setProducts(data.map(product=>({...product,inWishlist:false,inCart:false})))
      
   })()
  },[])

  

  

  


  return (
    <EcommProvider
      value={
        {
          products,
          wishlist,
          cart,
          handleAddproductinCart,
          handleAddproductinWishlist,
          handleRemoveproductinCart,
          handleRemoveproductinWishlist,
          countofCart,
          countofWishlist,
        }
      }>
      <Navbar />
      <Outlet/>
    </EcommProvider>
  )
}

export default App
