import React from 'react'
import UsersIcon from '../../assets/svgs/UsersIcon'
import TwitterIcon from '../../assets/svgs/TwitterIcon'

const OurTeam = () => {
  return (
    <div
      className='w-[90%] md:w-[95%] max-w-7xl mx-auto flex flex-col gap-[46px] pt-[84px] pb-[90px]'
      id='team'
    >
      <div className='flex flex-col items-start gap-[18px]'>
        <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#1d212c]'>
          <span>
            <UsersIcon />
          </span>
          <span className='text-main-purple text-sm font-medium'>Our team</span>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='text-2xl font-semibold'>Backed by the best</h4>
          <h5 className='text-secondary font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h5>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-3'>
              <img
                src='/assets/images/two-img.png'
                className='w-16 h-16 rounded-full'
              />
              <div className='flex flex-col gap-0.5'>
                <h5 className='text-base text-white font-semibold'>Grinch</h5>
                <span className='text-[#00e6ca] text-sm font-medium'>
                  Founder & CEO
                </span>
              </div>
            </div>
            <TwitterIcon />
          </div>
          <p className='text-secondary text-sm font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-3'>
              <img
                src='/assets/images/two-img.png'
                className='w-16 h-16 rounded-full'
              />
              <div className='flex flex-col gap-0.5'>
                <h5 className='text-base text-white font-semibold'>Grinch</h5>
                <span className='text-[#00e6ca] text-sm font-medium'>
                  Founder & CEO
                </span>
              </div>
            </div>
            <TwitterIcon />
          </div>
          <p className='text-secondary text-sm font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-3'>
              <img
                src='/assets/images/two-img.png'
                className='w-16 h-16 rounded-full'
              />
              <div className='flex flex-col gap-0.5'>
                <h5 className='text-base text-white font-semibold'>Grinch</h5>
                <span className='text-[#00e6ca] text-sm font-medium'>
                  Founder & CEO
                </span>
              </div>
            </div>
            <TwitterIcon />
          </div>
          <p className='text-secondary text-sm font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-3'>
              <img
                src='/assets/images/two-img.png'
                className='w-16 h-16 rounded-full'
              />
              <div className='flex flex-col gap-0.5'>
                <h5 className='text-base text-white font-semibold'>Grinch</h5>
                <span className='text-[#00e6ca] text-sm font-medium'>
                  Founder & CEO
                </span>
              </div>
            </div>
            <TwitterIcon />
          </div>
          <p className='text-secondary text-sm font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-3'>
              <img
                src='/assets/images/two-img.png'
                className='w-16 h-16 rounded-full'
              />
              <div className='flex flex-col gap-0.5'>
                <h5 className='text-base text-white font-semibold'>Grinch</h5>
                <span className='text-[#00e6ca] text-sm font-medium'>
                  Founder & CEO
                </span>
              </div>
            </div>
            <TwitterIcon />
          </div>
          <p className='text-secondary text-sm font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-3'>
              <img
                src='/assets/images/two-img.png'
                className='w-16 h-16 rounded-full'
              />
              <div className='flex flex-col gap-0.5'>
                <h5 className='text-base text-white font-semibold'>Grinch</h5>
                <span className='text-[#00e6ca] text-sm font-medium'>
                  Founder & CEO
                </span>
              </div>
            </div>
            <TwitterIcon />
          </div>
          <p className='text-secondary text-sm font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
