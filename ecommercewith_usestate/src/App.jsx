import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AllProducts from './components/AllProducts'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [NoofCartItem, setNoofCartItem] = useState(0)
  const [NoofWishlistItem, setNoofWishlistItem] = useState(0)
  const [showProduct, setShowProduct] = useState(true)
  const [showCart, setShowCart] = useState(false)
  const [showWishlist, setShowWishlist] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {


    })
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
      .finally(() => setLoading(false))
  }, []);

  const handleAddCart = (id) => {
    setCart(prev => [...prev, products.find(product => product.id === id)]);
    setNoofCartItem(NoofCartItem + 1)
  }

  const handleAddWishlist = (id) => {
    setWishlist(prev => [...prev, products.find(product => product.id === id)]);
    setNoofWishlistItem(NoofWishlistItem + 1)
  }

  const handleRemoveItemfromCart = (id) => {
    setCart(prev => prev.filter(product => product.id !== id))
    setNoofCartItem(NoofCartItem - 1)
  }

  const handleRemoveItemfromWishlist = (id) => {
    setWishlist(prev => prev.filter(product => product.id !== id))
    setNoofWishlistItem(NoofWishlistItem - 1)
  }

  const selectProduct = () => {
    setShowCart(false)
    setShowProduct(true)
    setShowWishlist(false)
  }
  const selectCart = () => {
    setShowCart(true)
    setShowProduct(false)
    setShowWishlist(false)
  }
  const selectWishlist = () => {
    setShowCart(false)
    setShowProduct(false)
    setShowWishlist(true);
  }

  console.log("app rendered")

  return (
    <>
      <Navbar
        selectWishlist={selectWishlist}
        selectCart={selectCart}
        selectProduct={selectProduct}
        NoofCartItem={NoofCartItem}
        NoofWishlistItem={NoofWishlistItem}

      />

      {
        showProduct && (
          loading ? <h1>Loading ...</h1> : (
          error ? <h1>Something Went Wrong</h1> : <AllProducts
            firstHandler={handleAddCart}
            secondHandler={handleAddWishlist}
            products={products} />
        )
        )
      }

      {
        showCart && <Cart
          cart={cart}
          secondHandler={handleRemoveItemfromCart}
        />
      }
      {
        showWishlist && <Wishlist
          wishlist={wishlist}
          secondHandler={handleRemoveItemfromWishlist}
        />
      }
    </>
  )
}

export default App
