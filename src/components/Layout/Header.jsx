import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogInIcon from '../../assets/svgs/LoginIcon'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { navLinks } from '../../constants/data'

const Header = () => {
  const location = useLocation()

  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <header className='w-[95%] max-w-[1440px] mx-auto py-[17px] flex justify-between items-center'>
        <div className='flex items-end'>
          <img src='/assets/sonya-logo.svg' alt='sonya logo' />
          <span className='font-rocgrotesk text-lg'>Sonya</span>
        </div>
        <ul className='hidden lg:flex gap-[30px]'>
          {navLinks.map((link, i) => {
            const isCurrentPage =
              link.url === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.url)
            if (link.url.includes('#')) {
              return (
                <li
                  className={`text-xs font-semibold ${
                    isCurrentPage ? 'text-[#9952ff]' : 'text-white'
                  }`}
                  key={i}
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              )
            }
            return (
              <li
                className={`text-xs font-semibold ${
                  isCurrentPage ? 'text-[#9952ff]' : 'text-white'
                }`}
                key={i}
              >
                <Link to={link.url}>{link.name}</Link>
              </li>
            )
          })}
        </ul>

        <div className='hidden lg:flex gap-6 items-center'>
          <Link to='/login' className='text-xs font-semibold'>
            Log in
          </Link>
          <Link
            to='/register'
            className='bg-[#7516FF] flex items-center justify-center gap-2 py-3 px-[45px] rounded-[8px] text-xs font-semibold'
          >
            <span className='text-white'>
              <LogInIcon />
            </span>{' '}
            Sign up
          </Link>
        </div>

        <button onClick={toggleSidebar} className='lg:hidden'>
          <GiHamburgerMenu />
        </button>
      </header>

      <div
        className={`fixed top-0 right-0 h-screen w-full bg-dark-4 transition-transform transform ${
          showSidebar ? 'translate-x-0' : 'translate-x-full'
        } z-20 lg:hidden`}
      >
        <div className='flex justify-between p-6'>
          <div className='flex items-end'>
            <img src='/assets/sonya-logo.svg' alt='sonya logo' />
            <span className='font-rocgrotesk text-lg'>Sonya</span>
          </div>
          <button className='text-white text-2xl' onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className='flex flex-col items-start p-6 gap-6'>
          {navLinks.map((link, i) => {
            const isCurrentPage =
              link.url === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.url)

            if (link.url.includes('#')) {
              return (
                <a
                  href={link.url}
                  onClick={toggleSidebar}
                  className={`text-xs font-semibold ${
                    isCurrentPage ? 'text-[#9952ff]' : 'text-white'
                  }`}
                  key={i}
                >
                  {link.name}
                </a>
              )
            }

            return (
              <Link
                to={link.url}
                onClick={toggleSidebar}
                className={`text-xs font-semibold ${
                  isCurrentPage ? 'text-[#9952ff]' : 'text-white'
                }`}
                key={i}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <div className='flex flex-col mt-8 px-6 gap-6 items-start'>
          <div>
            <Link to='/login' className='text-xs font-semibold'>
              Log in
            </Link>
          </div>
          <Link
            to='/register'
            className='bg-[#7516FF] flex items-center justify-center gap-2 py-3 px-[45px] rounded-[8px] text-xs font-semibold'
          >
            <span className='text-white'>
              <LogInIcon />
            </span>{' '}
            Sign up
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
