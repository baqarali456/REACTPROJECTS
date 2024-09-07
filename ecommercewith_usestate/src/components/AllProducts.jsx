import Card from "./Card"


function AllProducts({ products, firstHandler, secondHandler }) {
  console.log(products)

  return (
    <div className=" d-flex flex-row flex-wrap container my-3">
      {
        products.map(product => <Card
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          addFirstText={"Add To Cart"}
          addSecondText={"Add To Wishlist"}
          firstHandler={firstHandler}
          secondHandler={secondHandler}
        />
        )
      }

    </div>
  )
}

export default AllProducts
