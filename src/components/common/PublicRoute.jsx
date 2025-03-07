// src/routes/PublicRoute.js
import React from 'react'
import { Navigate } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth'

function PublicRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className='min-h-screen  py-12 flex items-center justify-center'>
        <div className='text-center space-y-4'>
          <FaSpinner className='animate-spin text-white text-4xl mx-auto' />
        </div>
      </div>
    )
  }
  // If logged in, redirect away from login
  return user && user?.userId ? <Navigate to='/dashboard' replace /> : children
}

export default PublicRoute
