import React from 'react'
import Card from './Card'

function Cart({cart,secondHandler}) {

    

  return (
    <div>
    {
        cart.map(product=><Card key={product.id} id={product.id} {...product} addSecondText={"Remove from Cart"} secondHandler={secondHandler}/>)
    }
    </div>
    
  )
}

export default Cart
