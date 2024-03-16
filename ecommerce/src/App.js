
import {useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './components/Cart';

function App() {
   let ecommerceJson = [
    {
      productid:0,
      productname:"SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
      price:"1,48,900",
      category:"mobile",
      img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/n/u/-original-imagx9egm9mgmvab.jpeg?q=70&crop=false",
    },
    {
      productid:1,
      price:"1,39,999",
      productname:"Apple iPhone 15 Pro Max (Black Titanium, 256 GB)",
      category:"mobile",
      img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/r/5/-original-imagtc3kcmph6ax5.jpeg?q=70&crop=false",
    },
    {
      productid:2,
      productname:"Women Viscose Rayon Kurta Palazzo Dupatta Set",
      category:"women clothing",
      price:"839",
      img:"https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/g/g/i/3xl-orange-es331a-metro-fashion-original-imagrhyfqn7raeyg.jpeg?q=70&crop=true"
    },
    {
      productid:3,
      price:"45,990",
      productname:"LG UR7500 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV 2023 Edition ",
      category:"TV",
      img:"https://rukminim2.flixcart.com/image/416/416/xif0q/television/e/i/m/-original-imagtvdyjzxgz3f7.jpeg?q=70&crop=false"
    },
  ]

  const [list,setList] = useState(ecommerceJson);
  const [showlist,setshowList] = useState(true);
  const [showcart,setshowCart] = useState(false);
  let [cart,setCart] = useState([]);
  let [cartIndex,setcartIndex] = useState(0);
  let [prices,setPrices] = useState(0);
  

  
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
   
  return (
    <>
    <Navbar handleHome={()=>{setshowList(true);setshowCart(false)}} cartIndex={cartIndex} handleshowCart={()=>handleshowCart()}/>
    <div className='container my-3 d-flex flex-row flex-wrap'>
    {showlist && list.map(ele=>(
      <Card key={ele.productid} 
    list={list} 
    image={ele.img} 
    title={ele.productname} 
    handleclick={()=>handleAdd(ele.productid)} 
    showcart={showcart}  
    category={ele.category} 
    id={ele.productid}
   
     />))}

    {showcart &&  cart.map(ele=>(
      <Cart key={ele.productname}  
      image={ele.img} 
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
