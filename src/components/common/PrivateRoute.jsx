import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'

import { navigator } from '../../lib/navigator'
import useAuth from '../../hooks/useAuth'

function PrivateRoute({ roles, children }) {
  const { user, loading } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    navigator.setNavigate(navigate)
    return () => navigator.setNavigate(null)
  }, [])

  if (loading) {
    return (
      <div className='min-h-screen  py-12 flex items-center justify-center'>
        <div className='text-center space-y-4'>
          <FaSpinner className='animate-spin text-white text-4xl mx-auto' />
        </div>
      </div>
    )
  }

  // If not logged in, redirect to login
  if (!user || !user?.userId) {
    return <Navigate to='/login' replace />
  }

  // if roles isnt equal 404
  if (roles && !roles.includes(user?.role)) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold mb-4'>404</h1>
        <p className='text-xl mb-4'>Page not found</p>
        <Link to='/' className='text-blue-500 hover:text-blue-700'>
          Go back home
        </Link>
      </div>
    )
  }

  return children
}

export default PrivateRoute
