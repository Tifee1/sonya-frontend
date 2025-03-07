import React from 'react'
import Frame96 from '../../assets/svgs/Frame96'
import GrassLogoMark1 from '../../assets/svgs/GrassLogoMark1'
import ProcessorIcon from '../../assets/svgs/ProcessorIcon'
import SmallGrassLogoMark from '../../assets/svgs/SmallGrassLogoMark'
import MagicEdenIcon from '../../assets/svgs/MagicEdenIcon'
import NodePayIcon from '../../assets/svgs/NodePayIcon'
import MagicEdenIconBig from '../../assets/svgs/MagicEdenIconBig'
import MagicEdenBlur from '../../assets/svgs/MagicEdenBlur'
import SmallNodePayIcon from '../../assets/svgs/SmallNodePayIcon'

const Modules = () => (
  <div
    className='w-[90%] md:w-[95%] max-w-7xl mx-auto flex flex-col gap-[46px] pt-[169px] pb-[196px] relative'
    id='modules'
  >
    <div className='absolute bottom-[10%] left-0 hidden md:block'>
      <Frame96 />
    </div>
    <div className='absolute top-[10%] left-[10%] hidden md:block'>
      <div className='bg-dark-4 px-6 py-5 inline-flex rounded-full'>
        <GrassLogoMark1 />
      </div>
    </div>
    <div className='absolute top-[10%] right-0 hidden md:block'>
      <MagicEdenIconBig />
    </div>
    <div className='absolute bottom-[5%] left-[35%] hidden md:block'>
      <MagicEdenBlur />
    </div>
    <div className='absolute bottom-[20%] right-[10%] hidden md:block'>
      <SmallNodePayIcon />
    </div>

    <div className='flex flex-col items-center text-center gap-[18px] max-w-[804px] mx-auto z-10'>
      <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#1d212c]'>
        <span>
          <ProcessorIcon />
        </span>
        <span className='text-main-purple text-sm font-medium'>
          Currently supporting 3 modules
        </span>
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='text-2xl font-semibold'>
          Supporting the most lucrative modules
        </h4>
        <h5 className='text-secondary font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim ven.
        </h5>
      </div>
    </div>
    <div className='flex flex-col gap-4 z-10'>
      <h5 className='text-tertiary text-center text-sm font-medium uppercase'>
        Modules supported
      </h5>
      <div className='flex flex-col gap-2 max-w-[554px] w-full mx-auto'>
        <div className='flex justify-between rounded-lg bg-dark-2 p-1.5'>
          <div className='flex gap-2 items-center'>
            <span className='p-2 rounded-md border border-dark-4 bg-dark-3'>
              <SmallGrassLogoMark />
            </span>
            <div className='flex flex-col gap-[1px]'>
              <span className='text-secondary text-xs font-medium'>
                Network
              </span>
              <h5 className='text-white text-base font-semibold'>Grass</h5>
            </div>
          </div>
          <div className='flex flex-col gap-[1px] justify-center items-end'>
            <span className='text-[#8e94ab] text-xs font-medium'>Status</span>
            <div className='flex items-center gap-1'>
              <svg
                width={6}
                height={7}
                viewBox='0 0 6 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx={3} cy='3.5' r={3} fill='#00E6CA' />
              </svg>
              <h5 className='text-[#00e6ca] text-sm font-semibold'>
                Operating
              </h5>
            </div>
          </div>
        </div>
        <div className='flex justify-between rounded-lg bg-dark-2 p-1.5'>
          <div className='flex gap-2 items-center'>
            {/* <span className='p-2 rounded-md border border-dark-4 bg-dark-3'> */}
            <MagicEdenIcon />
            {/* </span> */}
            <div className='flex flex-col gap-[1px]'>
              <span className='text-secondary text-xs font-medium'>
                Network
              </span>
              <h5 className='text-white text-base font-semibold'>Magic Eden</h5>
            </div>
          </div>
          <div className='flex flex-col gap-[1px] justify-center items-end'>
            <span className='text-[#8e94ab] text-xs font-medium'>Status</span>
            <div className='flex items-center gap-1'>
              <svg
                width={6}
                height={7}
                viewBox='0 0 6 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx={3} cy='3.5' r={3} fill='#00E6CA' />
              </svg>
              <h5 className='text-[#00e6ca] text-sm font-semibold'>
                Operating
              </h5>
            </div>
          </div>
        </div>
        <div className='flex justify-between rounded-lg bg-dark-2 p-1.5'>
          <div className='flex gap-2 items-center'>
            {/* <span className='p-2 rounded-md border border-dark-4 bg-dark-3'> */}
            <NodePayIcon />
            {/* </span> */}
            <div className='flex flex-col gap-[1px]'>
              <span className='text-secondary text-xs font-medium'>
                Network
              </span>
              <h5 className='text-white text-base font-semibold'>Nodepay</h5>
            </div>
          </div>
          <div className='flex flex-col gap-[1px] justify-center items-end'>
            <span className='text-[#8e94ab] text-xs font-medium'>Status</span>
            <div className='flex items-center gap-1'>
              <svg
                width={6}
                height={7}
                viewBox='0 0 6 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx={3} cy='3.5' r={3} fill='#00E6CA' />
              </svg>
              <h5 className='text-[#00e6ca] text-sm font-semibold'>
                Operating
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Modules
