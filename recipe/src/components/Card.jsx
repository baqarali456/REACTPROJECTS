import React from 'react'

const Card = ({ recipes ,handleAddtoWishlist}) => {
    return (
        <div className="container d-flex flex-row flex-wrap">
            {
                recipes.map(recipe => {
                    const { 
                        idCategory,
                        strCategory,
                        strCategoryThumb,
                        strCategoryDescription,
                        isWishlist
                    } = recipe
                    return <div key={idCategory} className="card mx-2 my-2 " style={{ "width": "18rem" }}>
                        <img src={strCategoryThumb} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{strCategory}</h5>
                            <p className="card-text">{strCategoryDescription}</p>
                            <button 
                            disabled={isWishlist} onClick={()=>handleAddtoWishlist(idCategory)} className="btn btn-primary">Addto Wishlist</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Card
