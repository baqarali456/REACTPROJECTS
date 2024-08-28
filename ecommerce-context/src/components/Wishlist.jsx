import { useEcommContext } from "../context/ecommContext"


const Wishlist = () => {
    const { wishlist,handleRemoveproductinWishlist } = useEcommContext()
    return (
        <div className=" container my-3 d-flex flex-row flex-wrap">
            {
                wishlist && wishlist.length ? wishlist.map(product=>{
                    return <div key={product.id} className="card mx-2 my-2" style={{ "width": "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button 
                    onClick={()=>handleRemoveproductinWishlist(product.id)} disabled={product.inWishlist} className="btn btn-danger">Remove from Wishlist</button>
                </div>
            </div>
                })  : <h4>No item in Wishlist</h4>
            }
        </div>
    )
}

export default Wishlist
