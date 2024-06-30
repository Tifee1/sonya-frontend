import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import DashboardPage from '../pages/DashboardPage'

const Routes = (
  <>
    <Route path='/' element={<LoginPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/dashboard' element={<DashboardPage />} />
  </>
)

export default Routes
