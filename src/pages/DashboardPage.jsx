import React from 'react'
import Logo from '../assets/svgs/Logo'
import { RiArrowDownSLine } from 'react-icons/ri'
import LogOut from '../assets/svgs/LogOut'
import Tag from '../assets/svgs/Tag'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import CalendarEvent from '../assets/svgs/CalendarEvent'
import { FaTimes } from 'react-icons/fa'
import ArrowSwap from '../assets/svgs/ArrowSwap'
import CrossCircle from '../assets/svgs/CrossCircle'
import FileDownload from '../assets/svgs/FileDownload'

const DashboardPage = () => {
  return (
    <>
      <header className='bg-dark-2'>
        <div className='w-full max-w-7xl mx-auto px-6 py-[18px] flex justify-between'>
          <div className='flex items-end'>
            <img src='/assets/sonya-logo.svg' alt='sonya logo' />
            <span className='font-rocgrotesk text-[15px] font-medium'>
              Sonya
            </span>
          </div>
          <div className='flex gap-2.5'>
            <div className='bg-dark-2 sm:w-[181px] flex justify-between items-center border border-dark-4 rounded-md p-[3px]'>
              <div className='flex gap-2 items-center'>
                <Logo />
                <span className='hidden sm:inline-block text-sm font-semibold'>
                  User 384924
                </span>
              </div>
              <span className='text-secondary'>
                <RiArrowDownSLine />
              </span>
            </div>
            <button className='bg-dark-4 px-3 sm:px-0 sm:w-[128px] flex items-center justify-center gap-2 rounded-md'>
              <LogOut />
              <span className='hidden sm:inline-block text-secondary text-xs font-semibold'>
                Logout
              </span>
            </button>
          </div>
        </div>
      </header>
      <div className='flex flex-col items-center justify-center min-h-[calc(100vh-76px)]'>
        <section className='w-[90%] max-w-3xl mx-auto p-[15px] flex flex-col gap-4 mt-[20px]'>
          <div className='bg-dark-2 flex flex-col gap-3 p-2 rounded-[10px]'>
            <div className='p-3 grid gap-y-6 sm:grid-cols-[1fr,auto,1fr] items-center'>
              <div className='flex gap-[14px]'>
                <div className='relative w-[70px] h-[70px]'>
                  <img
                    src='/assets/profile-image.png'
                    alt='profile'
                    className='rounded-full'
                  />
                  <div className='absolute inset-x-0 bottom-0 flex items-center justify-center'>
                    <div className='inline-flex justify-center flex-col items-start gap-2 rounded-full border-[3px] border-[#161923] bg-[#d9d9d9]'>
                      <div className='flex justify-center items-center gap-2 py-[3px] px-[7px] rounded-full border border-[#43ffe8] bg-[#00e6ca] text-[#292d39] text-[10px] font-medium'>
                        Active
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-secondary text-xs font-medium'>
                    Welcome back,
                  </h5>
                  <span className='text-sm font-semibold'>User 384924</span>
                  <div className='bg-dark-1 py-[5px] px-1.5 rounded-[5px] flex gap-[5px] items-center mt-2'>
                    <Tag />{' '}
                    <span className='text-[#00E6CA] text-xs font-medium'>
                      Monthly Plan
                    </span>
                  </div>
                </div>
              </div>
              <div className='hidden sm:inline-grid w-[2px] h-[45px] bg-dark-4 mr-4'></div>
              <div className='flex gap-[14px]'>
                <div className='relative w-[70px] h-[70px]'>
                  <CircularProgressbar
                    value={70}
                    counterClockwise
                    strokeWidth={8}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: 'butt',
                      pathTransitionDuration: 0.5,
                      trailColor: '#1D212C',
                      pathColor: '#7516FF',
                    })}
                  />
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-secondary text-xs font-medium'>
                    Expires in
                  </h5>
                  <span className='text-sm font-semibold'>22 days</span>
                  <div className='bg-dark-1 py-[5px] px-1.5 rounded-[5px] flex gap-[5px] items-center mt-2'>
                    <CalendarEvent />{' '}
                    <span className='text-[#9952FF] text-xs font-medium'>
                      June 28th, 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-dark-1 rounded-md p-2.5 flex justify-between gap-4 items-center'>
              <div className='flex flex-col gap-[1px]'>
                <h5 className='text-secondary text-[10px] sm:text-xs font-medium'>
                  Expiration Date
                </h5>
                <span className='text-xs sm:text-sm font-semibold'>
                  Renews on June 23, 2024 at $5/m
                </span>
              </div>
              <button className='bg-[#FF166A] w-[120px] sm:w-[148px] py-[10.5px] flex gap-2 items-center justify-center rounded-md'>
                <span>
                  <CrossCircle />
                </span>
                <span className='text-xs font-semibold'>Cancel</span>
              </button>
            </div>
            <div className='bg-dark-1 rounded-md p-2.5 flex justify-between gap-4 items-center'>
              <div className='flex flex-col gap-[1px]'>
                <h5 className='text-secondary text-[10px] sm:text-xs font-medium'>
                  Current Plan
                </h5>
                <span className='text-sm font-semibold'>Monthly Plan</span>
              </div>
              <button className='bg-main w-[120px] sm:w-[148px] py-[10.5px] flex gap-2 items-center justify-center rounded-md'>
                <span>
                  <ArrowSwap />
                </span>
                <span className='text-xs sm:text-sm font-semibold'>
                  Change Plan
                </span>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-dark-2 rounded-[10px] p-4 flex justify-between items-start'>
              <div>
                <img src='/assets/windows-icon.png' alt='window' />
                <h5 className='text-secondary text-[10px] sm:text-xs font-medium mt-3'>
                  Download
                </h5>
                <span className='text-xs sm:text-sm font-semibold'>
                  Windows 64
                </span>
              </div>
              <button>
                <FileDownload />
              </button>
            </div>
            <div className='bg-dark-2 rounded-[10px] p-4 flex justify-between items-start'>
              <div>
                <img src='/assets/mac-icon.png' alt='apple' />
                <h5 className='text-secondary text-[10px] sm:text-xs font-medium mt-3'>
                  Download
                </h5>
                <span className='text-xs sm:text-sm font-semibold'>Apple</span>
              </div>
              <button>
                {' '}
                <FileDownload />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DashboardPage
