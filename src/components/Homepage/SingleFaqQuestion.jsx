import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const SingleFaqQuestion = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFaq = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`flex flex-col gap-3 bg-dark-2 shadow-[0px,1px,2px,0px,#0000000D] p-4 rounded-lg ${
        isOpen && 'border border-[#00E6CA]'
      }`}
      onClick={toggleFaq}
    >
      <div className='flex justify-between items-center'>
        <h4 className='text-base font-medium'>{faq.question}</h4>
        <button className='text-secondary'>
          {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
      </div>
      {isOpen && <p className='text-base text-secondary'>{faq.answer}</p>}
    </div>
  )
}

export default SingleFaqQuestion
