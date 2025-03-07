import React from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Routes from './constants/routes'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'sonner'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(Routes))

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position='top-right'
        closeButton={true}
        richColors
        toastOptions={{ classNames: { toast: 'px-4 py-4' } }}
      />
    </AuthProvider>
  )
}

export default App
