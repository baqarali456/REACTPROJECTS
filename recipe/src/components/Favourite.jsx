import React from 'react'

const Favourite = ({ removeRecipefromWishlist, Wishlist }) => {
    return (
        <div className="container d-flex flex-row flex-wrap ">
            {
                Wishlist && Wishlist.length > 0 ? Wishlist.map(item => {
                    const {
                        idCategory,
                        strCategory,
                        strCategoryThumb,
                        strCategoryDescription,
                        isWishlist
                    } = item
                    return <div key={idCategory} className="card mx-2 my-2" style={{ "width": "18rem" }}>
                        <img src={strCategoryThumb} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{strCategory}</h5>
                            <p className="card-text">{strCategoryDescription}</p>
                            <button onClick={() => removeRecipefromWishlist(idCategory)} className="btn btn-primary">Remove Wishlist</button>
                        </div>
                    </div>
                }): <h4>No items In Wishlist</h4>
            }
        </div>
    )
}

export default Favourite
