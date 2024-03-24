
import {useCallback, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './components/Cart';
import Filtering from './components/Filtering';
import ecommerceJson from './Data';

function App() {
   const allcategories = [...new Set(ecommerceJson.map(ele=>ele.category))];
   
   

  const [list,setList] = useState(ecommerceJson);

  const [showlist,setshowList] = useState(true);

  const [showcart,setshowCart] = useState(false);

  let [cart,setCart] = useState([]);

  let [cartIndex,setcartIndex] = useState(0);

  let [prices,setPrices] = useState(0);

  const [pricerange,setpricerange] = useState(150000);
  
  
  const generatePricerange = useCallback(()=>{
    let newlist = [...ecommerceJson].filter(ele=>Number(ele.price.split(',').join('')) <= pricerange);
      setList(newlist);
  },[pricerange,setList]);

  useEffect(()=>{
    generatePricerange()
  },[pricerange])
  

  
  function handleAdd(i){
    cartIndex++;
   cart.push(list[i]);
   setcartIndex(cartIndex)
   setCart(cart);
  }

  function handleshowCart(){
    setshowList(false); //false
    setshowCart(true); //true
    prices = cart.reduce((acc,ele)=>acc + parseInt(ele.price.split(',').join('')),0);
    setPrices(prices);
  }

  function removeitem(i){
    cartIndex--;
    cart = cart.filter(ele=>ele.productid !== i);
    prices = cart.reduce((acc,ele)=>acc + parseInt(ele.price.split(',').join('')),0);
    setPrices(prices);
    setcartIndex(cartIndex);
    setCart(cart);
  }

  function handleonChange(category){
    let categoryData = ecommerceJson.filter(ele=>ele.category === category);
    setList(categoryData)
  }

   
  return (
    <>
    <Navbar handleonChange={handleonChange} allcategories={allcategories} handleHome={(e)=>{setshowList(true);setshowCart(false);setList(ecommerceJson)}} cartIndex={cartIndex} handleshowCart={()=>handleshowCart()}/>

    <Filtering 
    handlePriceChange={(e)=>setpricerange(e)} 
    pricerange={pricerange}/>

    <div className='container my-3 d-flex flex-row flex-wrap'>
  
    {showlist && list.map(ele=>(
      <Card key={ele.productid} 
    list={list} 
    image={ele.img} 
    price={ele.price}
    title={ele.productname} 
    handleclick={()=>handleAdd(ele.productid)} 
    showcart={showcart}  
    category={ele.category} 
    id={ele.productid}
     />))}

    {showcart &&  cart.map(ele=>(
      <Cart key={ele.productname}  
      image={ele.img} 
      price={ele.price}
      title={ele.productname} 
      handleshowCart={handleshowCart} 
      handleonRemove={()=>removeitem(ele.productid)}  
      category={ele.category}
      id={ele.productid} />))}
    </div>

    <div className="container">
   
    {showcart&&<h3> {prices>0 ?`Your Total Price is ${prices}`:"No Items In Cart"}</h3>}
    </div>
    </>
  );
}

export default App;
