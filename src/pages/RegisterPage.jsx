import React from 'react'
import { HiOutlineMinus } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import { FaDiscord } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const handleDiscordSignup = () => {
    // Redirect to your backend's Discord OAuth endpoint
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/discord`
  }

  return (
    <main className="relative bg-[url('/assets/bg-vector.png')] bg-repeat">
      <div className='absolute right-6 top-5'>
        <div className='flex gap-[5px] items-center'>
          <button className='text-lg text-secondary'>
            <HiOutlineMinus />
          </button>
          <button className='text-lg text-secondary'>
            <RxCross1 />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <section className='w-[90%] max-w-[400px] mx-auto bg-dark-1 p-[15px] flex flex-col gap-[15px] rounded-[10px] shadow-[0px_5px_31.6px_0px_rgba(0,0,0,0.25)]'>
          <div className='flex items-end'>
            <img src='/assets/sonya-logo.svg' alt='sonya logo' />
            <span className='font-rocgrotesk text-lg'>Sonya</span>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-sm font-semibold'>Sign Up</h3>
              <h4 className='text-xs font-normal text-secondary'>
                Sign up to access the dashboard
              </h4>
            </div>

            <button
              onClick={handleDiscordSignup}
              className='bg-[#7516FF] flex items-center justify-center gap-2 py-3 rounded-md text-xs font-semibold'
            >
              <FaDiscord className='text-lg' /> Sign up with Discord
            </button>

            <div className='border border-dark-4'></div>
            <p className='text-xs text-secondary'>
              Already have an account?{' '}
              <Link to='/login' className='text-main'>
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default RegisterPage
