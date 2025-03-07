import React from 'react'
import BulbIcon from '../../assets/svgs/BulbIcon'
import { blogData } from '../../constants/data'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link } from 'react-router-dom'

const FeaturedBlog = () => {
  return (
    <div className='w-[90%] md:w-[95%] max-w-7xl mx-auto flex flex-col gap-[46px] pt-[84px] pb-[90px]'>
      <div className='flex flex-col items-center justify-center text-center gap-[18px]'>
        <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#1d212c]'>
          <span>
            <BulbIcon />
          </span>
          <span className='text-main-purple text-sm font-medium'>
            Featured Blog
          </span>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='text-2xl font-semibold'>Your Latest Updates</h4>
          <h5 className='text-secondary font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h5>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        {Array(6)
          .fill(blogData)
          .flat()
          .map((blog, i) => {
            return (
              <article className='flex flex-col gap-[26px]' key={i}>
                <img
                  src={blog.image}
                  alt='web services'
                  className='rounded-[10px] md:min-h-[237px]'
                />
                <div className='flex flex-col gap-[10px]'>
                  <div className='flex items-start'>
                    <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
                      <BulbIcon /> Tips
                    </span>
                  </div>
                  <h4 className='text-sm lg:text-base font-semibold'>
                    {blog.text}
                  </h4>
                  <div className='flex justify-between sm:justify-start lg:justify-between flex-col lg:flex-row lg:items-center'>
                    <div className='flex gap-2.5 items-center text-secondary text-xs lg:text-sm font-medium'>
                      <span>{blog.date}</span>
                      <span className='w-[3px] h-[3px] rounded-full bg-secondary'></span>
                      <span>by {blog.by}</span>
                    </div>
                    <Link
                      to='/blogs/blog-post'
                      className='flex gap-[1px] items-center text-[#00E6CA] text-sm'
                    >
                      Read more <IoMdArrowDropright />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
      </div>
    </div>
  )
}

export default FeaturedBlog
