import React from 'react'
import BulbIcon from '../assets/svgs/BulbIcon'
import { Link } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'

const SingleBlog = () => {
  return (
    <section className='mt-5 md:mt-[70px] mb-10 md:mb-[143px] w-[90%] md:w-[95%] max-w-5xl mx-auto'>
      <div className='flex flex-col gap-[14px]'>
        <div className='flex items-start'>
          <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
            <BulbIcon /> Tips
          </span>
        </div>
        <h3 className='text-[32px] font-semibold leading-[41.29px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </h3>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2.5 items-center text-secondary text-sm font-medium'>
            <span>August 3, 2024</span>
            <span className='w-[3px] h-[3px] rounded-full bg-secondary'></span>
            <span>by Grinch</span>
          </div>
          <Link
            to='#'
            className='flex gap-[1px] items-center text-[#00E6CA] text-sm'
          >
            Read more <IoMdArrowDropright />
          </Link>
        </div>
      </div>
      <div className='mt-9 rounded-[10px] overflow-hidden'>
        <img src='/assets/images/blink-build-days.png' alt='blink build days' />
      </div>
      <div className='mt-10 flex flex-col gap-9'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet</h4>
          <p className='text-[#D2D6E6] text-base leading-[34.72px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at
            ultrices mi tempus imperdiet nulla malesuada. Pellentesque diam
            volutpat commodo sed egestas egestas fringilla. Id nibh tortor id
            aliquet lectus proin nibh nisl. Turpis in eu mi bibendum. Hendrerit
            gravida rutrum quisque non tellus orci ac auctor. Magna fermentum
            iaculis eu non. Fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam. Proin gravida hendrerit lectus a. Commodo viverra
            maecenas accumsan lacus vel. Dolor sit amet consectetur adipiscing
            elit ut aliquam. Enim nunc faucibus a pellentesque sit amet
            porttitor eget. <br />
            <br /> <br />
            Velit sed ullamcorper morbi tincidunt ornare. Quis blandit turpis
            cursus in hac habitasse platea. Duis at tellus at urna condimentum.
            Laoreet sit amet cursus sit amet dictum. Eu mi bibendum neque
            egestas congue quisque egestas. Quisque egestas diam in arcu cursus
            euismod. Pretium nibh ipsum consequat nisl vel pretium lectus quam.
            Amet aliquam id diam maecenas ultricies. Nunc sed blandit libero
            volutpat sed cras ornare arcu. Diam quam nulla porttitor massa id
            neque aliquam vestibulum. Nisl tincidunt eget nullam non nisi. Purus
            in massa tempor nec feugiat nisl. Ultrices sagittis orci a
            scelerisque purus semper. Integer malesuada nunc vel risus commodo.
            At elementum eu facilisis sed. Facilisis leo vel fringilla est
            ullamcorper eget nulla facilisi etiam. Mauris pharetra et ultrices
            neque ornare. Enim sit amet venenatis urna cursus eget nunc. <br />
            <br />
            <br /> In dictum non consectetur a erat nam. Imperdiet nulla
            malesuada pellentesque elit eget gravida cum sociis natoque. Blandit
            libero volutpat sed cras ornare arcu dui vivamus arcu. Ut eu sem
            integer vitae justo eget magna. Elit pellentesque habitant morbi
            tristique senectus et netus. Sit amet consectetur adipiscing elit
            duis. Eu facilisis sed odio morbi quis commodo odio. Facilisis magna
            etiam tempor orci eu lobortis elementum nibh tellus. Id aliquet
            lectus proin nibh nisl condimentum id venenatis. Sapien faucibus et
            molestie ac feugiat sed lectus vestibulum. Lectus arcu bibendum at
            varius. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ac
            orci phasellus egestas tellus.
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet</h4>
          <p className='text-[#D2D6E6] text-base leading-[34.72px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at
            ultrices mi tempus imperdiet nulla malesuada. Pellentesque diam
            volutpat commodo sed egestas egestas fringilla. Id nibh tortor id
            aliquet lectus proin nibh nisl. Turpis in eu mi bibendum. Hendrerit
            gravida rutrum quisque non tellus orci ac auctor. Magna fermentum
            iaculis eu non. Fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam. Proin gravida hendrerit lectus a. Commodo viverra
            maecenas accumsan lacus vel. Dolor sit amet consectetur adipiscing
            elit ut aliquam. Enim nunc faucibus a pellentesque sit amet
            porttitor eget.
          </p>
        </div>
      </div>

      <div className='border-t mt-[55px] mb-[44px] border-dark-4'></div>
      <div className='flex flex-col gap-5 mb-10 md:mb-[143px]'>
        <h4 className='text-lg font-semibold'>Related Posts</h4>
        <div className='grid sm:grid-cols-3 gap-6'>
          <div className='flex flex-col gap-[26px]'>
            <img
              src='/assets/images/web3-services.png'
              alt='web services'
              className='rounded-[10px]'
            />
            <div className='flex flex-col gap-[14px]'>
              <div className='flex items-start'>
                <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
                  <BulbIcon /> Tips
                </span>
              </div>
              <h4 className='text-sm lg:text-base font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <div className='flex justify-between sm:justify-start lg:justify-between sm:flex-col lg:flex-row lg:items-center'>
                <div className='flex gap-2.5 items-center text-secondary text-xs lg:text-sm font-medium'>
                  <span>August 3, 2024</span>
                  <span className='w-[3px] h-[3px] rounded-full bg-secondary'></span>
                  <span>by Grinch</span>
                </div>
                <Link
                  to='#'
                  className='flex gap-[1px] items-center text-[#00E6CA] text-sm'
                >
                  Read more <IoMdArrowDropright />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[26px]'>
            <img
              src='/assets/images/web3-services.png'
              alt='web services'
              className='rounded-[10px]'
            />
            <div className='flex flex-col gap-[14px]'>
              <div className='flex items-start'>
                <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
                  <BulbIcon /> Tips
                </span>
              </div>
              <h4 className='text-sm lg:text-base font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <div className='flex justify-between sm:justify-start lg:justify-between sm:flex-col lg:flex-row lg:items-center'>
                <div className='flex gap-2.5 items-center text-secondary text-xs lg:text-sm font-medium'>
                  <span>August 3, 2024</span>
                  <span className='w-[3px] h-[3px] rounded-full bg-secondary'></span>
                  <span>by Grinch</span>
                </div>
                <Link
                  to='#'
                  className='flex gap-[1px] items-center text-[#00E6CA] text-sm'
                >
                  Read more <IoMdArrowDropright />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[26px]'>
            <img
              src='/assets/images/web3-services.png'
              alt='web services'
              className='rounded-[10px]'
            />
            <div className='flex flex-col gap-[14px]'>
              <div className='flex items-start'>
                <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
                  <BulbIcon /> Tips
                </span>
              </div>
              <h4 className='text-sm lg:text-base font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <div className='flex justify-between sm:justify-start lg:justify-between sm:flex-col lg:flex-row lg:items-center'>
                <div className='flex gap-2.5 items-center text-secondary text-xs lg:text-sm font-medium'>
                  <span>August 3, 2024</span>
                  <span className='w-[3px] h-[3px] rounded-full bg-secondary'></span>
                  <span>by Grinch</span>
                </div>
                <Link
                  to='#'
                  className='flex gap-[1px] items-center text-[#00E6CA] text-sm'
                >
                  Read more <IoMdArrowDropright />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleBlog
