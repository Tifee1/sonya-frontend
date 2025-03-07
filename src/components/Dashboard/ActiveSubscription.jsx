import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Tag from '../../assets/svgs/Tag'
import CalendarEvent from '../../assets/svgs/CalendarEvent'
import CrossCircle from '../../assets/svgs/CrossCircle'
import ArrowSwap from '../../assets/svgs/ArrowSwap'
import FileDownload from '../../assets/svgs/FileDownload'
import dayjs from 'dayjs'

import advancedFormat from 'dayjs/plugin/advancedFormat'
import { SUBSCRIPTION_PRICES } from '../../lib/config'
import { createCustomerPortal } from '../../api/subscription'
import { FaSpinner } from 'react-icons/fa'

dayjs.extend(advancedFormat)

const ActiveSubscription = ({ userProfile }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { subscription } = userProfile

  const handleUpdateCustomer = async () => {
    try {
      setIsLoading(true)

      const response = await createCustomerPortal()

      const data = response.data
      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to create portal')
    } finally {
      setIsLoading(false)
    }
  }

  const remainingDays = dayjs(subscription?.expiresAt).diff(dayjs(), 'day')

  const totalDays = dayjs(subscription?.expiresAt).diff(
    dayjs(subscription?.lastBillingDate),
    'day'
  )

  const percentageLeft = (remainingDays / totalDays) * 100

  return (
    <section className='w-[90%] max-w-3xl mx-auto py-[15px] flex flex-col gap-4 mt-[20px] sm:mt-[86px]'>
      <div className='bg-dark-2 flex flex-col gap-3 p-2 rounded-[10px]'>
        <div className='p-3 grid gap-y-6 sm:grid-cols-[1fr,auto,1fr] items-center'>
          <div className='flex gap-[14px]'>
            <div className='relative w-[70px] h-[70px]'>
              <img
                src={userProfile?.avatar || '/assets/profile-image.png'}
                alt={userProfile?.username || 'profile'}
                className='rounded-full'
              />
              <div className='absolute inset-x-0 bottom-0 flex items-center justify-center'>
                <div className='inline-flex justify-center flex-col items-start gap-2 rounded-full border-[3px] border-[#161923] bg-[#d9d9d9]'>
                  <div
                    className={`flex justify-center items-center gap-2 py-[3px] px-[7px] rounded-full border ${
                      subscription.cancelled
                        ? 'border-[#FF166A] bg-[#FF166A]/20 text-[#FF166A]'
                        : 'border-[#43ffe8] bg-[#00e6ca] text-[#292d39]'
                    } text-[10px] font-medium`}
                  >
                    {subscription.cancelled ? 'Cancelled' : 'Active'}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <h5 className='text-secondary text-xs font-medium'>
                Welcome back,
              </h5>
              <span className='text-sm font-semibold'>
                {userProfile?.username || userProfile?.email}
              </span>
              <div className='bg-dark-1 py-[5px] px-1.5 rounded-[5px] flex gap-[5px] items-center mt-2'>
                <Tag />{' '}
                <span className='text-[#00E6CA] text-xs font-medium capitalize'>
                  {subscription?.plan || 'Monthly'} Plan
                </span>
              </div>
            </div>
          </div>
          <div className='hidden sm:inline-grid w-[2px] h-[45px] bg-dark-4 mr-4'></div>
          <div className='flex gap-[14px]'>
            <div className='relative w-[70px] h-[70px]'>
              <CircularProgressbar
                value={percentageLeft}
                counterClockwise
                strokeWidth={8}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  pathTransitionDuration: 0.5,
                  trailColor: '#1D212C',
                  pathColor: '#7516FF',
                })}
              />
            </div>
            <div className='flex flex-col'>
              <h5 className='text-secondary text-xs font-medium'>Expires in</h5>
              <span className='text-sm font-semibold'>
                {remainingDays} day{remainingDays > 1 && 's'}
              </span>
              <div className='bg-dark-1 py-[5px] px-1.5 rounded-[5px] flex gap-[5px] items-center mt-2'>
                <CalendarEvent />{' '}
                <span className='text-[#9952FF] text-xs font-medium'>
                  {dayjs(subscription?.expiresAt).format('MMMM Do, YYYY')}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-dark-1 rounded-md p-2.5 flex justify-between gap-4 items-center'>
          <div className='flex flex-col gap-[1px]'>
            {subscription.cancelled ? (
              <div className='bg-dark-1 rounded-md p-2.5 mt-2'>
                <div className='flex items-center gap-2 mb-1'>
                  <CrossCircle fill='#FF166A' />
                  <h5 className='text-[#FF166A] font-semibold text-sm'>
                    Subscription Cancelled
                  </h5>
                </div>
                <p className='text-secondary text-xs'>
                  Your subscription will{' '}
                  <span className='text-white font-medium'>not renew</span>{' '}
                  after {dayjs(subscription?.expiresAt).format('MMMM DD, YYYY')}
                  . You'll have full access until this date.
                </p>
                {/* Optional restore button */}
                {/* <button
                  onClick={handleUpdateCustomer}
                  disabled={isLoading}
                  className='mt-2 bg-[#FF166A]/10 text-[#FF166A] border border-[#FF166A]/30 px-3 py-1.5 rounded text-xs font-medium hover:bg-[#FF166A]/20 transition-colors'
                >
                  {isLoading ? (
                    <FaSpinner className='animate-spin mx-auto' />
                  ) : (
                    'Restore Subscription'
                  )}
                </button> */}
              </div>
            ) : (
              <>
                <h5 className='text-secondary text-[10px] sm:text-xs font-medium'>
                  Expiration Date
                </h5>
                <span className='text-xs sm:text-sm font-semibold'>
                  Renews on{' '}
                  {dayjs(subscription?.nextBillingDate).format('MMMM DD, YYYY')}{' '}
                  at $
                  {(
                    SUBSCRIPTION_PRICES[subscription.plan?.toUpperCase()] / 100
                  )?.toLocaleString()}
                  /{subscription.plan === 'monthly' ? 'm' : 'a'}
                </span>
              </>
            )}
          </div>

          {/* <button className='bg-[#FF166A] w-[120px] sm:w-[148px] py-[10.5px] flex gap-2 items-center justify-center rounded-md'>
            <span>
              <CrossCircle />
            </span>
            <span className='text-xs font-semibold'>Cancel</span>
          </button> */}
        </div>
        <div className='bg-dark-1 rounded-md p-2.5 flex justify-between gap-4 items-center'>
          <div className='flex flex-col gap-[1px]'>
            <h5 className='text-secondary text-[10px] sm:text-xs font-medium'>
              Current Plan
            </h5>
            <span className='text-sm font-semibold capitalize'>
              {' '}
              {subscription?.plan || 'Monthly'} Plan
            </span>
          </div>
          <button
            className='bg-main w-[120px] sm:w-[148px] py-[10.5px] flex gap-2 items-center justify-center rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={handleUpdateCustomer}
            disabled={isLoading}
          >
            {isLoading ? (
              <FaSpinner className='animate-spin text-white mx-auto' />
            ) : (
              <>
                {' '}
                <span>
                  <ArrowSwap />
                </span>
                <span className='text-xs sm:text-sm font-semibold'>
                  Manage Plan
                </span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-dark-2 rounded-[10px] p-4 flex justify-between items-start'>
          <div>
            <img src='/assets/windows-icon.png' alt='window' />
            <h5 className='text-secondary text-[10px] sm:text-xs font-medium mt-3'>
              Download
            </h5>
            <span className='text-xs sm:text-sm font-semibold'>Windows 64</span>
          </div>
          <button>
            <FileDownload />
          </button>
        </div>
        <div className='bg-dark-2 rounded-[10px] p-4 flex justify-between items-start'>
          <div>
            <img src='/assets/mac-icon.png' alt='apple' />
            <h5 className='text-secondary text-[10px] sm:text-xs font-medium mt-3'>
              Download
            </h5>
            <span className='text-xs sm:text-sm font-semibold'>Apple</span>
          </div>
          <button>
            {' '}
            <FileDownload />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ActiveSubscription
