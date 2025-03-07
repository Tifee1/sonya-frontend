import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import dayjs from 'dayjs'
import { createCustomerPortal } from '../../api/subscription'
import { toast } from 'sonner'

const ExpiredSubscription = ({ userProfile }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { subscription } = userProfile

  const handleManageSubscription = async () => {
    try {
      setIsLoading(true)
      const response = await createCustomerPortal()
      const data = response.data
      window.location.href = data.url
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to create portal')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='w-[90%] max-w-3xl mx-auto py-[15px] flex flex-col gap-4 mt-[20px] sm:mt-[86px]'>
      <div className='bg-dark-2 p-4 sm:p-6 rounded-[10px] text-center'>
        <div className='flex flex-col items-center gap-4'>
          <div className='bg-[#FF166A]/10 text-[#FF166A] px-3 py-1 rounded-md text-sm font-medium'>
            Subscription Expired
          </div>

          <h2 className='text-lg sm:text-xl font-semibold'>
            Your subscription has ended
          </h2>

          <p className='text-secondary text-xs sm:text-sm max-w-lg'>
            Your subscription ended on{' '}
            {dayjs(subscription?.expiresAt).format('MMMM DD, YYYY')}. Renew now
            to continue using Sonya's features.
          </p>

          <button
            onClick={handleManageSubscription}
            disabled={isLoading}
            className='bg-[#7516FF] px-6 py-2.5 rounded-md mt-2 w-full sm:w-auto'
          >
            {isLoading ? (
              <FaSpinner className='animate-spin mx-auto' />
            ) : (
              <span className='text-sm font-medium'>Manage Subscription</span>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExpiredSubscription
