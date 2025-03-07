import React from 'react'
import KeyIcon from '../../assets/svgs/KeyIcon'
import ScanRecIcon from '../../assets/svgs/ScanRecIcon'
import MouseIcon from '../../assets/svgs/MouseIcon'
import WalletIcon from '../../assets/svgs/WalletIcon'
import MonitorIcon from '../../assets/svgs/MonitorIcon'
import CommentsIcon from '../../assets/svgs/CommentsIcon'
import ChartLineIcon from '../../assets/svgs/ChartLineIcon'

const Features = () => {
  return (
    <div className='bg-dark-2' id='description'>
      <div className='w-[90%] md:w-[95%] max-w-7xl mx-auto flex flex-col gap-[46px] pt-[84px] pb-[90px]'>
        <div className='flex flex-col items-start gap-[18px]'>
          <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#1d212c]'>
            <span>
              <ChartLineIcon />
            </span>
            <span className='text-main-purple text-sm font-medium'>
              Advanced features
            </span>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'>World class features</h4>
            <h5 className='text-secondary font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h5>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-3'>
            <div className='flex flex-col gap-[14px] items-start'>
              <span className='flex justify-center items-center p-2 rounded-md border border-main-purple bg-[#7516ff]'>
                <KeyIcon />
              </span>
              <h5 className='text-base font-semibold'>Maximum Randomization</h5>
            </div>
            <p className='text-secondary text-sm font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-3'>
            <div className='flex flex-col gap-[14px] items-start'>
              <span className='flex justify-center items-center p-2 rounded-md border border-main-purple bg-[#7516ff]'>
                <ScanRecIcon />
              </span>
              <h5 className='text-base font-semibold'>
                Sybil Detection Preventions
              </h5>
            </div>
            <p className='text-secondary text-sm font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-3'>
            <div className='flex flex-col gap-[14px] items-start'>
              <span className='flex justify-center items-center p-2 rounded-md border border-main-purple bg-[#7516ff]'>
                <MouseIcon />
              </span>
              <h5 className='text-base font-semibold'>
                1-Click Auto Withdraw from CEX
              </h5>
            </div>
            <p className='text-secondary text-sm font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-3'>
            <div className='flex flex-col gap-[14px] items-start'>
              <span className='flex justify-center items-center p-2 rounded-md border border-main-purple bg-[#7516ff]'>
                <WalletIcon />
              </span>
              <h5 className='text-base font-semibold'>
                Fully Undetectable Wallet Manager
              </h5>
            </div>
            <p className='text-secondary text-sm font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-3'>
            <div className='flex flex-col gap-[14px] items-start'>
              <span className='flex justify-center items-center p-2 rounded-md border border-main-purple bg-[#7516ff]'>
                <MonitorIcon />
              </span>
              <h5 className='text-base font-semibold'>
                Amazing Sleek Powerful UI
              </h5>
            </div>
            <p className='text-secondary text-sm font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className='flex flex-col gap-5 p-5 rounded-[10px] bg-dark-3'>
            <div className='flex flex-col gap-[14px] items-start'>
              <span className='flex justify-center items-center p-2 rounded-md border border-main-purple bg-[#7516ff]'>
                <CommentsIcon />
              </span>
              <h5 className='text-base font-semibold'>
                Great Community, Guides, & Support
              </h5>
            </div>
            <p className='text-secondary text-sm font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
