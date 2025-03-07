import React from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import errorLottie from '../assets/lottie/error-lottie.json'
import { LuArrowLeft } from 'react-icons/lu'

const PaymentCancel = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const redirect = searchParams.get('redirect')

  const proceedToDashboard = () => {
    navigate('/dashboard')
  }

  if (!redirect) {
    return <Navigate to='/dashboard' />
  }

  return (
    <main className='flex-1 h-screen flex items-center justify-center'>
      <div className='w-[90%] max-w-2xl mx-auto'>
        <div className='rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center shadow-lg border border-gray-500 animate-fade-up'>
          {/* Lottie Animation with Container */}
          <div className='w-40 sm:w-48 mb-6 relative'>
            <div className='absolute inset-0 bg-red-500/10 dark:bg-red-500/5 rounded-full filter blur-xl animate-pulse'></div>
            <Lottie
              animationData={errorLottie}
              loop={false}
              className='relative z-10'
            />
          </div>

          {/* Title with Gradient */}
          <h4 className='text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text'>
            Payment Canceled
          </h4>

          {/* Description */}
          <p className='text-base sm:text-lg text-secondary mb-8 max-w-lg'>
            It seems you've canceled the payment process. No charges were made.
            If you'd like to complete your purchase, you can try again at any
            time.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
            {/* <button
              className='flex-1 py-3 px-6 rounded-xl bg-base-color-300 hover:bg-base-color-400 text-primary-text font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-base-stroke'
              onClick={() => navigate(-1)}
            >
            Go Back
            </button> */}

            <button
              className='flex-1 py-3 px-6 rounded-xl bg-[#7516FF] hover:bg-[#7516FF]/90 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2'
              onClick={proceedToDashboard}
            >
              <LuArrowLeft className='text-lg' />
              Continue to Dashboard
            </button>
          </div>

          {/* Help Text */}
          {/* <p className='mt-8 text-sm text-secondary-text'>
            Need help?{' '}
            <Link
              to='/dashboard/support'
              className='text-primary hover:text-primary/80 font-medium transition-colors'
            >
              Contact Support
            </Link>
          </p> */}
        </div>
      </div>
    </main>
  )
}

export default PaymentCancel
