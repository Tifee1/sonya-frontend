import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BulbIcon from '../assets/svgs/BulbIcon'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { blogData } from '../constants/data'

const BlogPage = () => {
  // Duplicate the blog data 36 times for demo
  const duplicatedBlogData = Array(36).fill(blogData).flat()

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Calculate the paginated data
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = duplicatedBlogData.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  // Calculate total pages
  const totalPages = Math.ceil(duplicatedBlogData.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const previousPage = () =>
    currentPage > 1 && handlePageChange(currentPage - 1)

  const nextPage = () =>
    currentPage < totalPages && handlePageChange(currentPage + 1)

  return (
    <section className='mt-5 md:mt-[70px] mb-10 md:mb-[143px] w-[90%] md:w-[95%] max-w-7xl mx-auto'>
      <h4 className='text-lg font-semibold'>Blogs</h4>
      <div className='grid lg:grid-cols-[1fr,1fr] gap-6 mt-[14px]'>
        <div className='flex flex-col gap-[26px] justify-between'>
          <img
            src='/assets/images/blink-build-days.png'
            alt='blink build days'
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
              eiusmod tempor incididunt
            </h4>
            <div className='flex flex-col sm:flex-row gap-2 sm:justify-between'>
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
        <div className='flex flex-col gap-[18px]'>
          <div className='flex gap-6'>
            <div className='w-[200px] h-[150px]'>
              <img
                src='/assets/images/solana-meetups.png'
                alt='solana meetups'
                className='rounded-[10px] w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex items-start'>
                <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
                  <BulbIcon /> Tips
                </span>
              </div>
              <h4 className='text-sm font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <div className='flex flex-col gap-[10px]'>
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
          <div className='flex gap-6 items-center'>
            <div className='w-[200px] h-[150px]'>
              <img
                src='/assets/images/solana-meetups.png'
                alt='solana meetups'
                className='rounded-[10px] w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex items-start'>
                <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
                  <BulbIcon /> Tips
                </span>
              </div>
              <h4 className='text-sm font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <div className='flex flex-col gap-[10px]'>
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
          <div className='flex gap-6'>
            <div className='w-[200px] h-[150px]'>
              <img
                src='/assets/images/solana-meetups.png'
                alt='solana meetups'
                className='rounded-[10px] w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex items-start'>
                <span className='flex gap-2 items-center text-sm font-medium bg-dark-3 text-[#9952FF] py-1.5 px-3 rounded-[21px]'>
                  <BulbIcon /> Tips
                </span>
              </div>
              <h4 className='text-sm font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <div className='flex flex-col gap-[10px]'>
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
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-[76px] gap-x-6 gap-y-9'>
        {currentItems.map((blog, i) => {
          return (
            <div className='flex flex-col gap-[26px]' key={i}>
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
                <div className='flex justify-between sm:justify-start lg:justify-between sm:flex-col lg:flex-row lg:items-center'>
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
            </div>
          )
        })}
      </div>
      <div className='mt-10 md:mt-[70px] flex items-center justify-center'>
        <button className='px-3 py-1.5 text-secondary' onClick={previousPage}>
          <IoMdArrowDropleft />
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1
          return (
            <button
              key={index}
              className={`px-4 py-2 ${
                currentPage === pageNumber
                  ? 'bg-[#7516FF] text-white rounded-[21px]'
                  : 'text-secondary'
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
        <button className='px-4 py-2 text-secondary' onClick={nextPage}>
          <IoMdArrowDropright />
        </button>
      </div>
    </section>
  )
}

export default BlogPage
