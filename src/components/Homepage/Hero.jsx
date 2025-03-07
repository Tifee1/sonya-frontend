import React from 'react'
import LogInIcon from '../../assets/svgs/LoginIcon'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='overflow-hidden'>
      <div className='md:ml-[80px] lg:ml-[152px] pt-[84px] pb-[90px] relative'>
        <div className='md:grid grid-cols-2 gap-9 items-center'>
          <div className='flex flex-col gap-7 items-center justify-center mx-10 md:mx-0 md:items-start md:justify-start z-[15]'>
            <div className='flex flex-col gap-5 z-[15]'>
              <h3 className='text-white text-5xl font-semibold'>
                The number one airdrop farmer.
              </h3>
              <p className='text-secondary font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ven.
              </p>
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
          <div className='hidden md:block w-full h-full z-10'>
            <img
              className='w-full h-full object-fill'
              alt='Frame'
              src='/assets/images/dashboard-overview.png'
            />
          </div>
          <div className='bg-black blur-[70px] h-[1000px] w-[200px] absolute top-0 right-0 z-[15] hidden md:block'></div>
        </div>
        <div className='bg-[#7516ff] blur-[52px] h-[300px] w-[200px] absolute top-[20%] left-[565px]'></div>
      </div>
    </div>
  )
}

export default Hero
