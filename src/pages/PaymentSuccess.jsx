import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import successLottie from '../assets/lottie/success-lottie.json'
import errorLottie from '../assets/lottie/error-lottie.json'

import { LuArrowLeft } from 'react-icons/lu'
import { checkSession } from '../api/subscription'
import { FaSpinner } from 'react-icons/fa'

const PaymentStatus = ({ type, message, onAction, actionText }) => {
  const lottieData = type === 'success' ? successLottie : errorLottie
  const gradientClass =
    type === 'success'
      ? 'from-emerald-500 to-teal-500'
      : 'from-red-500 to-orange-500'

  return (
    <div className='w-[90%] max-w-2xl mx-auto'>
      <div className='rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center shadow-lg border border-gray-500 animate-fade-up'>
        {/* Lottie Animation with Container */}
        <div className='w-40 sm:w-48 mb-6 relative'>
          <div
            className={`absolute inset-0 ${
              type === 'success' ? 'bg-emerald-500/10' : 'bg-red-500/10'
            } dark:bg-opacity-5 rounded-full filter blur-xl animate-pulse`}
          ></div>
          <Lottie
            animationData={lottieData}
            loop={false}
            className='relative z-10'
          />
        </div>

        {/* Title with Gradient */}
        <h4
          className={`text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
        >
          Payment {type === 'success' ? 'Successful' : 'Failed'}
        </h4>

        {/* Description */}
        <p className='text-base sm:text-lg text-secondary mb-8 max-w-lg'>
          {message}
        </p>

        {/* Action Button */}
        <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
          <button
            className='flex-1 py-3 px-6 rounded-xl bg-[#7516FF] hover:bg-[#7516FF]/90 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2'
            onClick={onAction}
          >
            <LuArrowLeft className='text-lg' />

            {actionText}
          </button>
        </div>

        {/* Help Text */}
        {/* {type === 'error' && (
          <p className='mt-8 text-sm text-secondary-text'>
            Need help?{' '}
            <Link
              to='/dashboard/support'
              className='text-primary hover:text-primary/80 font-medium transition-colors'
            >
              Contact Support
            </Link>
          </p>
        )} */}
      </div>
    </div>
  )
}

const LoadingState = () => (
  <main className='flex-1 h-screen flex flex-col gap-4 items-center justify-center'>
    <div className='relative'>
      <div className='absolute inset-0 bg-[#7516FF]/10 rounded-full filter blur-xl animate-pulse'></div>
      <div className='text-center space-y-4'>
        <FaSpinner className='animate-spin text-white text-4xl mx-auto' />
      </div>
    </div>
    <p className='text-secondary animate-pulse'>Verifying your payment...</p>
  </main>
)

const PaymentSuccess = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const sessionId = searchParams.get('session_id')
  const redirect = searchParams.get('redirect')

  useEffect(() => {
    const checkStatus = async () => {
      if (!sessionId || !redirect) {
        navigate('/dashboard')
        return
      }
      try {
        await checkSession({ sessionId })
        setSuccess(true)
        setLoading(false)
        setTimeout(() => navigate('/dashboard'), 5000)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }

    checkStatus()
  }, [sessionId, redirect, navigate])

  const proceedToDashboard = () => {
    navigate('/dashboard')
  }

  if (loading) {
    return <LoadingState />
  }

  if (success) {
    return (
      <main className='flex-1 h-screen flex items-center justify-center'>
        <PaymentStatus
          type='success'
          message='Your payment has been processed successfully. You will be redirected to your dashboard shortly.'
          onAction={proceedToDashboard}
          actionText='Continue to Dashboard'
        />
      </main>
    )
  }

  return (
    <main className='flex-1 h-screen flex items-center justify-center'>
      <PaymentStatus
        type='error'
        message="Unfortunately, your payment couldn't be processed. Please try again or contact support if the issue persists."
        onAction={proceedToDashboard}
        actionText='Back to Dashboard'
      />
    </main>
  )
}

export default PaymentSuccess
