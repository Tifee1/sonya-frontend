import React from 'react'

import CreditCardIcon from '../../assets/svgs/CreditCardIcon'
import BoxIcon from '../../assets/svgs/BoxIcon'
import CheckCircleIcon from '../../assets/svgs/CheckCircleIcon'
import ArrowRightIcon from '../../assets/svgs/ArrowRightIcon'
import UserCircleIcon from '../../assets/svgs/UserCircleIcon'
import PlanetIcon from '../../assets/svgs/PlanetIcon'

const Pricing = () => (
  <div
    className='relative overflow-hidden flex flex-col gap-[46px] pt-[84px] pb-[90px] bg-dark-2'
    id='pricing'
  >
    <div className='bg-[#6906f9] blur-[70px] h-[300px] w-[167px] absolute top-0 right-0'></div>
    <div className='bg-[#a12aff] blur-[70px] h-[167px] w-[267px] absolute bottom-0 left-0'></div>

    <div className='max-5xl mx-auto z-10 flex flex-col gap-[46px]'>
      <div className='flex flex-col items-center justify-center text-center gap-[18px]'>
        <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#1d212c]'>
          <span>
            <CreditCardIcon />
          </span>
          <span className='text-main-purple text-sm font-medium'>Pricing</span>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='text-2xl font-semibold'>Affordable pricing plans</h4>
          <h5 className='text-secondary font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h5>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-5 items-center px-4'>
        <div className='flex flex-col gap-2.5 p-5 rounded-[10px] bg-dark-1'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <div className='flex items-center gap-3'>
                  <span className='p-2 rounded-md border border-dark-4 bg-dark-2'>
                    <UserCircleIcon />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-main text-sm font-medium'>
                      For individuals
                    </span>
                    <h5 className='text-white text-base font-semibold'>
                      Standard
                    </h5>
                  </div>
                </div>
              </div>
              <h4 className='text-secondary text-sm font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h4>
              <h3 className='text-[32px] font-semibold'>
                $39.99
                <span className='text-tertiary font-medium text-base pl-1'>
                  /monthly
                </span>
              </h3>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-4 items-center'>
                <span className='text-main'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-main'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-main'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-main'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
            </div>

            <button className='bg-main hover:bg-main/70 flex justify-center items-center gap-2 py-[13px] rounded-md text-white text-sm font-semibold'>
              Purchase Now
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2.5 p-5 rounded-[10px] bg-dark-1'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <div className='flex items-center gap-3'>
                  <span className='p-2 rounded-md border border-dark-4 bg-dark-2'>
                    <BoxIcon />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-[#00e6ca] text-sm font-medium'>
                      For entrepreneurs
                    </span>
                    <h5 className='text-white text-base font-semibold'>Pro</h5>
                  </div>
                </div>
              </div>
              <h4 className='text-secondary text-sm font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h4>
              <h3 className='text-[32px] font-semibold'>
                $59.99
                <span className='text-tertiary font-medium text-base pl-1'>
                  /monthly
                </span>
              </h3>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-4 items-center'>
                <span className='text-[#00E6CA]'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-[#00E6CA]'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-[#00E6CA]'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-[#00E6CA]'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
            </div>

            <button className='bg-[#00c8b0] hover:bg-[#00c8b0]/70 flex justify-center items-center gap-2 py-[13px] rounded-md text-white text-sm font-semibold leading-[normal]'>
              Purchase Now
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2.5 p-5 rounded-[10px] bg-dark-1'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <div className='flex items-center gap-3'>
                  <span className='p-2 rounded-md border border-dark-4 bg-dark-2'>
                    <PlanetIcon />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-main-purple text-sm font-medium'>
                      For businesses
                    </span>
                    <h5 className='text-white text-base font-semibold'>
                      Enterprise
                    </h5>
                  </div>
                </div>
              </div>
              <h4 className='text-secondary text-sm font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h4>
              <h3 className='text-[32px] font-semibold'>
                $89.99
                <span className='text-tertiary font-medium text-base pl-1'>
                  /monthly
                </span>
              </h3>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-4 items-center'>
                <span className='text-main-purple'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-main-purple'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-main-purple'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <span className='text-main-purple'>
                  <CheckCircleIcon />
                </span>
                <div className='text-[#d2d6e6] text-sm font-medium'>
                  Feature here
                </div>
              </div>
            </div>

            <button className='bg-main-purple hover:bg-main-purple/70 flex justify-center items-center gap-2 py-[13px] rounded-md text-white text-sm font-semibold leading-[normal]'>
              Purchase Now
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
