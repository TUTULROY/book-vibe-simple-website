import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

import Home from './components/Home/Home.jsx'
import ListedBook from './components/ListedBook/ListedBook.jsx'
import PagesToRead from './components/PagesToRead/PagesToRead.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import ReadBooks from './components/ReadBooks/ReadBooks.jsx'
import WishListsBook from './components/WishListsBook/WishListsBook.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import About from './components/About/About.jsx'


const router = createBrowserRouter([

{
  path:"/",
  element:<Root></Root>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/book/:bookId',
      element:<BookDetails></BookDetails>,
      loader: () => fetch('../book.json')
    },
    {
      path:'/lists',
      element:<ListedBook></ListedBook>,
      loader: () => fetch('/book.json'),
      children:[
        {
          path:'',
          element:<ReadBooks></ReadBooks>
        },
        {
          path:'wishlist',
          element:<WishListsBook></WishListsBook>
        }

      ]
    },
    {
      path:'/pages',
      element:<PagesToRead></PagesToRead>
    },
    {
      path:'/contact',
      element:<Contacts></Contacts>,
    },
    {
      path:'/about',
      element:<About></About>
    }
    
  ],
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
