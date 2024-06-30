import React, { useState } from 'react'
import { HiOutlineMinus } from 'react-icons/hi'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordVisible2, setPasswordVisible2] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
              <h3 className='text-sm font-semibold'>Sign Up</h3>
              <h4 className='text-xs font-normal text-secondary'>
                Sign up to access the dashboard
              </h4>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='email' className='text-secondary text-xs'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='example@gmail.com'
                className='w-full bg-dark-3 text-secondary placeholder:text-secondary text-xs font-medium p-2.5 rounded-md outline-none'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='password' className='text-secondary text-xs'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Enter Password'
                  className='w-full bg-dark-3 text-secondary placeholder:text-secondary text-xs font-medium p-2.5 rounded-md outline-none'
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute inset-y-0 right-0 px-3 flex items-center'
                >
                  {passwordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='confirmpassword'
                className='text-secondary text-xs'
              >
                Confirm Password
              </label>
              <div className='relative'>
                <input
                  type={passwordVisible2 ? 'text' : 'password'}
                  name='confirmpassword'
                  id='confirmpassword'
                  placeholder='Enter Password'
                  className='w-full bg-dark-3 text-secondary placeholder:text-secondary text-xs font-medium p-2.5 rounded-md outline-none'
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility2}
                  className='absolute inset-y-0 right-0 px-3 flex items-center'
                >
                  {passwordVisible2 ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>
            <button
              className='bg-[#7516FF] flex items-center justify-center gap-2 py-3 rounded-md text-xs font-semibold'
              type='submit'
            >
              <img src='/assets/log-in.svg' alt='log-in' /> Sign Up
            </button>
            <div className='border border-dark-4'></div>
            <p className='text-xs text-secondary'>
              Already have an account?{' '}
              <Link to='/login' className='text-main'>
                Login
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  )
}

export default RegisterPage
