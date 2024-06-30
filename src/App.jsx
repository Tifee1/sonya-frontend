import React from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Routes from './constants/routes'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(Routes))

  return <RouterProvider router={router} />
}

export default App
