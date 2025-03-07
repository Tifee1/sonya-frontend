import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TrophyIcon from '../../assets/svgs/TrophyIcon'

const Vouches = () => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slides = [
    { id: 1, image: '/assets/images/vouch-image-1.png' },
    { id: 2, image: '/assets/images/vouch-image-2.png' },
    { id: 3, image: '/assets/images/vouch-image-3.png' },
    { id: 4, image: '/assets/images/vouch-image-4.png' },
    { id: 5, image: '/assets/images/vouch-image-5.png' },
  ]

  return (
    <div className='bg-dark-2  pt-[84px] pb-[90px]' id='vouches'>
      <div className='w-[90%] md:w-[95%] max-w-7xl mx-auto flex flex-col gap-[46px]'>
        <div className='flex flex-col items-start gap-[18px]'>
          <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#1d212c]'>
            <span>
              <TrophyIcon />
            </span>
            <span className='text-main-purple text-sm font-medium'>
              Vouches and wins
            </span>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'>Proven by success</h4>
            <h5 className='text-secondary font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h5>
          </div>
        </div>
      </div>
      <div className='mt-[46px]'>
        <Slider {...settings} className=''>
          {slides.map((slide, index) => {
            return (
              <div key={slide.id} className='flex flex-col gap-5 mx-5'>
                <div className='flex flex-col items-start gap-2.5 p-5 rounded-[10px] bg-dark-3 mr-5'>
                  <div className='flex flex-col items-start gap-5'>
                    <div className='flex items-center gap-3'>
                      <img
                        src='/assets/images/user-image.png'
                        className='rounded-full w-[38px] h-[38px]'
                      />
                      <div className='flex flex-col items-start'>
                        <div className='text-white font-semibold'>Grinch</div>
                        <div className='text-tertiary text-sm font-medium'>
                          Member since 4/12/2023
                        </div>
                      </div>
                    </div>
                    <div className='text-secondary text-sm font-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </div>
                  </div>
                </div>
                <div className='mt-5 mr-5 h-[200px] rounded-[10px] overflow-hidden'>
                  <img
                    src={slide.image}
                    className='rounded-[10px] h-full w-full'
                  />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Vouches
