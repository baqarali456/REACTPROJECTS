import Card from "./Card"


function Wishlist({wishlist,secondHandler}) {
  return (
    <div className="container d-flex flex-row flex-wrap my-3">
       {
        wishlist.map(product=><Card key={product.id} id={product.id} {...product} addSecondText={"Remove form Wishlist Item"}
            secondHandler={secondHandler}
        />)
       }
    </div>
  )
}

export default Wishlist
