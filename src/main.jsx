import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'


const router = createBrowserRouter([

{
  path:"/",
  element:<Root></Root>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[
    {
      path:"/",
      element:<BookDetails></BookDetails>
    }
  ],
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
