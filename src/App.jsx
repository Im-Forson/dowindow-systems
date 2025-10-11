import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './pages/home'
import Main from './pages/Main'
import Quote from './pages/Quote'

const appRouter = createBrowserRouter([
  { path: '/', element: <Main/>},
  { path: '/quote', element: <Quote/>}
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
