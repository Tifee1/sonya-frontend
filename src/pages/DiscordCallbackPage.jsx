import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'
import { api } from '../lib/axios'

const DiscordCallback = () => {
  const [status, setStatus] = useState('processing')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const processCallback = async () => {
      try {
        // Get the code from URL query parameters
        const params = new URLSearchParams(location.search)
        const code = params.get('code')

        if (!code) {
          setStatus('error')
          setError('Authorization code missing')
          return
        }

        // Call your backend to exchange the code for a token
        const response = await api.get('/auth/discord/callback')

        setStatus('success')

        // Check if user has active subscription
        const userResponse = await api('/auth/me')

        const userData = await userResponse.data

        // Redirect based on subscription status
        setTimeout(() => {
          if (userData.user.subscriptionStatus === 'active') {
            navigate('/dashboard')
          } else {
            navigate('/pricing')
          }
        }, 1000)
      } catch (err) {
        setStatus('error')
        setError(err.message || 'Authentication failed')
      }
    }

    processCallback()
  }, [location, navigate])

  return (
    <main className="relative bg-[url('/assets/bg-vector.png')] bg-repeat">
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <section className='w-[90%] max-w-[400px] mx-auto bg-dark-1 p-[15px] flex flex-col gap-[15px] rounded-[10px] shadow-[0px_5px_31.6px_0px_rgba(0,0,0,0.25)]'>
          <div className='flex items-end'>
            <img src='/assets/sonya-logo.svg' alt='sonya logo' />
            <span className='font-rocgrotesk text-lg'>Sonya</span>
          </div>

          <div className='flex flex-col items-center gap-4 py-4'>
            {status === 'processing' && (
              <>
                <h3 className='text-sm font-semibold'>Logging in...</h3>
                <div className='flex items-center gap-2 text-main'>
                  <FaSpinner className='animate-spin' />
                  <span className='text-xs'>Processing your Discord login</span>
                </div>
              </>
            )}

            {status === 'success' && (
              <>
                <h3 className='text-sm font-semibold'>Login Successful</h3>
                <p className='text-xs text-secondary'>
                  Redirecting to dashboard...
                </p>
              </>
            )}

            {status === 'error' && (
              <>
                <h3 className='text-sm font-semibold'>Login Failed</h3>
                <p className='text-xs text-secondary'>{error}</p>
                <button
                  onClick={() => navigate('/login')}
                  className='bg-[#7516FF] flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-semibold mt-2'
                >
                  Back to Login
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default DiscordCallback
