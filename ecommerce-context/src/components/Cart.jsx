import { useEcommContext } from "../context/ecommContext"


const Cart = () => {
    const { cart ,handleRemoveproductinCart} = useEcommContext()
    return (
        <div className=" container my-3 d-flex flex-row flex-wrap">
            {
                cart && cart.length ? cart.map(product => {
                    return <div key={product.id} className="card mx-2 my-2" style={{ "width": "18rem" }}>
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <button onClick={()=>handleRemoveproductinCart(product.id)} className="btn btn-danger">Remove From Cart</button>
                        </div>
                    </div>
                }) : <h2>No Items in Cart</h2>
            }
        </div>
    )
}

export default Cart
