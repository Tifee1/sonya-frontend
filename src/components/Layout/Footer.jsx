import React from 'react'
import { navLinks } from '../../constants/data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-dark-2 pt-[64px] pb-[48px]'>
      <div className='flex flex-col gap-8 items-center justify-center'>
        <div className='flex items-end'>
          <img src='/assets/sonya-logo.svg' alt='sonya logo' />
          <span className='font-rocgrotesk text-lg font-medium'>Sonya</span>
        </div>
        <ul className='flex flex-wrap md:flex-nowrap items-center justify-center gap-[30px]'>
          {navLinks.map((link, i) => {
            const isCurrentPage =
              link.url === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.url)

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
      </div>
      <div className='mt-[64px] w-[95%] max-w-7xl mx-auto px-8'>
        <div className='border-t border-dark-4 flex justify-between  pt-8'>
          <span className='text-secondary text-base font-normal'>
            &copy; {new Date().getFullYear()} Sonya Bots. All rights reserved.
          </span>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link to='#' className='text-secondary text-base font-normal'>
              Terms
            </Link>
            <Link to='#' className='text-secondary text-base font-normal'>
              Privacy
            </Link>
            <Link to='#' className='text-secondary text-base font-normal'>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
