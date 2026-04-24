import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layouts/Root.jsx'
import Home from './components/Home/Home.jsx'
import AllProducts from './components/AllProducts/AllProducts.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: '/allProducts',
        Component: AllProducts
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
