import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admission from './Components/Admission'
import Home from './Components/Home'
import About from './Components/About'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([

    {
      path:"/",
      element:<><Header/><Home/></>
    },
    {
      path:"/About",
      element:<><Header/><About/></>
    },
    {
      path:"/Admission",
      element:<><Header/><Admission/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
      </>

  )
}

export default App
