import { useEcommContext } from "../context/ecommContext"

const Products = () => {
    const { products, handleAddproductinCart, handleAddproductinWishlist } = useEcommContext()

    const addProductinCart = (i) => {
        let product = products.find(item=>item.id === i)
        handleAddproductinCart(i,product)
    }
    
    const addProductinWishlist = (i) =>{
        let product = products.find(item=>item.id === i)
        handleAddproductinWishlist(i,product)
    }

    return (
        <div className=" container my-3 d-flex flex-row flex-wrap">
            {
                products.map(product => {
                    const {id,title,description,category,image,inCart,inWishlist,rating} = product
                    return <div key={id} className="card mx-2 my-2" style={{ "width": "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <button
                            onClick={()=>addProductinCart(id)}
                             disabled={inCart}
                             className="btn btn-primary mx-2 my-1">Add To Cart</button>
                            <button 
                            onClick={()=>addProductinWishlist(id)}
                            
                             className="btn btn-primary mx-2 my-1 ">Add To Wishlist</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Products
