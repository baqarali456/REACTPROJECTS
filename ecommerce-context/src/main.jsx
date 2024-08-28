import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Wishlist from './components/Wishlist.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Products/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"wishlist",
        element:<Wishlist/>
      }
    ]
  }
])
 

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>,
)
