import React from 'react'
import QuestionIcon from '../../assets/svgs/QuestionIcon'
import { IoMdArrowDropdown } from 'react-icons/io'
import SingleFaqQuestion from './SingleFaqQuestion'

const faqData = {
  question: 'Lorem ipsum dolor sit amet?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven.',
}

const Faq = () => {
  return (
    <div
      className='w-[90%] md:w-[95%] max-w-5xl mx-auto flex flex-col gap-[46px] pt-[84px] pb-[90px]'
      id='faqs'
    >
      <div className='flex flex-col items-start gap-[18px]'>
        <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#1d212c]'>
          <span>
            <QuestionIcon />
          </span>
          <span className='text-main-purple text-sm font-medium'>FAQ</span>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='text-2xl font-semibold'>Frequently asked questions</h4>
          <h5 className='text-secondary font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h5>
        </div>
      </div>
      <div className='flex flex-col gap-2.5'>
        {Array(6)
          .fill(faqData)
          .flat()
          .map((faq, i) => {
            return <SingleFaqQuestion key={i} faq={faq} />
          })}
      </div>
    </div>
  )
}

export default Faq
