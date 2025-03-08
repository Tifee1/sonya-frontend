import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import DashboardPage from '../pages/DashboardPage'
import PrivateRoute from '../components/common/PrivateRoute'
import DiscordCallback from '../pages/DiscordCallbackPage'
import PublicRoute from '../components/common/PublicRoute'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage'
import BlogPage from '../pages/BlogPage'
import SingleBlog from '../pages/SingleBlogPage'
import PaymentCancel from '../pages/PaymentCancel'
import PaymentSuccess from '../pages/PaymentSuccess'
import AdminDashboardPage from '../pages/AdminPage'

const Routes = (
  <>
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/blogs' element={<BlogPage />} />
      <Route path='/blogs/:slug' element={<SingleBlog />} />
    </Route>
    <Route
      path='/login'
      element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      }
    />
    <Route
      path='/register'
      element={
        <PublicRoute>
          <RegisterPage />
        </PublicRoute>
      }
    />
    <Route path='/discord/callback' element={<DiscordCallback />} />
    <Route
      path='/dashboard'
      element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>
      }
    />
    <Route
      path='/dashboard/subscription/cancel'
      element={
        <PrivateRoute>
          <PaymentCancel />
        </PrivateRoute>
      }
    />
    <Route
      path='/dashboard/subscription/success'
      element={
        <PrivateRoute>
          <PaymentSuccess />
        </PrivateRoute>
      }
    />
    <Route
      path='/dashboard/private'
      element={
        <PrivateRoute roles={['administrator']}>
          <AdminDashboardPage />
        </PrivateRoute>
      }
    />
    <Route
      path='*'
      element={
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-4xl font-bold mb-4'>404</h1>
          <p className='text-xl mb-4'>Page not found</p>
          <Link to='/' className='text-blue-500 hover:text-blue-700'>
            Go back home
          </Link>
        </div>
      }
    />
  </>
)

export default Routes
