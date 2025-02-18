/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import ExploreSection from './components/ExploreSection/ExploreSection.jsx'
import Banner from './components/Banner/Banner.jsx'
import SelectedCategory from './components/SelectedCatgeory/SelectedCategory.jsx'
import Products from './components/Products/Products.jsx'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import CartDetail from './components/CartDetail/CartDetail.jsx'
import WishListDetails from './components/WishListDetails/WishListDetails.jsx'
import ProductAddedDetail from './components/ProductAddedDetail/ProductAddedDetail.jsx'
import Statistics from './components/Statristics/Statistics.jsx'
import NewArrival from './components/NewArrival/NewArrival.jsx'
import ArrivalProducts from './components/ArrivalProducts/ArrivalProducts.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        children:[
          {
            path: '/',
            element: <Products/>
          },
          {
            path: '/:category',
            element: <SelectedCategory/>
          }
        ]
      },
      {
        path: '/product/:productId',
        element: <ProductDetail/>,
        loader: async ()=> await fetch("../gadgets.json")
      },
      {
        path: '/dashboard',
        element: <ProductAddedDetail/>,
        children:[
          {
            path: '',
            element: <CartDetail/>
          },
          {
            path: 'wishDetail',
            element: <WishListDetails/>
          }

        ]
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/new',
        element: <NewArrival/>,
        children:[
          {
            path:'',
            element: <ArrivalProducts/>
          }
        ]
      }
      // {
      //   path: '/wishDetail',
      //   element: <WishListDetails/>
      // }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
