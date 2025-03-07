import React, { useState } from 'react'
import { FaCreditCard, FaLock } from 'react-icons/fa'
import { toast } from 'sonner'
import { loadStripe } from '@stripe/stripe-js'
import { createSession } from '../../api/subscription'

const NoActiveSubscription = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
  const [couponCode, setCouponCode] = useState('')

  const handleSubscribe = async () => {
    const stripe = await stripePromise
    try {
      setIsCheckoutLoading(true)

      const response = await createSession({ couponCode })

      const data = response.data
      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: data?.sessionId,
      })

      if (error) {
        toast.error(error.message)
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message || 'Failed to initiate subscription'
      )
    } finally {
      setIsCheckoutLoading(false)
    }
  }

  return (
    <section className='w-[90%] max-w-3xl mx-auto py-[15px] flex flex-col gap-4 mt-[20px] sm:mt-[86px]'>
      <div className='bg-dark-2 flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 rounded-[10px] text-center'>
        <div className='flex flex-col items-center gap-2 sm:gap-3'>
          <div className='bg-dark-3 p-3 sm:p-4 rounded-full'>
            <FaLock className='text-2xl sm:text-4xl text-[#7516FF]' />
          </div>
          <h2 className='text-lg sm:text-xl font-semibold'>
            Please Purchase a Membership
          </h2>
          <p className='text-secondary text-xs sm:text-sm max-w-lg mx-auto px-1'>
            You need an active subscription to access the dashboard and use
            Sonya's features. Subscribe to get started.
          </p>
        </div>

        <div className='bg-dark-1 p-3 sm:p-5 rounded-lg mt-1 sm:mt-2 max-w-lg mx-auto w-full'>
          <h3 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3'>
            Monthly Subscription
          </h3>

          <div className='text-left mb-3 sm:mb-4'>
            <div className='flex justify-between items-center mb-1 sm:mb-2'>
              <span className='text-secondary text-xs sm:text-sm'>
                Initial Fee:
              </span>
              <span className='font-medium text-xs sm:text-base'>
                $50.00 USD
              </span>
            </div>
            <div className='flex justify-between items-center mb-3 sm:mb-4'>
              <span className='text-secondary text-xs sm:text-sm'>
                Monthly Subscription:
              </span>
              <span className='font-medium text-xs sm:text-base'>
                $30.00 USD
              </span>
            </div>
            <div className='h-px bg-dark-3 my-2'></div>
            <div className='flex justify-between items-center font-semibold text-xs sm:text-base'>
              <span>First Payment:</span>
              <span>$80.00 USD</span>
            </div>
          </div>

          <div className='my-3 sm:my-4'>
            <label className='text-secondary text-[10px] sm:text-xs mb-1 text-left block'>
              Discount Code (Optional)
            </label>
            <input
              type='text'
              placeholder='Enter coupon code'
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className='w-full bg-dark-3 text-white placeholder:text-secondary text-xs sm:text-sm p-2 sm:p-2.5 rounded-md outline-none border border-dark-4'
            />
            <div className='text-left text-[10px] sm:text-xs text-secondary mt-1'>
              Enter "FREE2025" for a free subscription or "WAIVE" to waive the
              initial fee.
            </div>
          </div>

          <button
            onClick={handleSubscribe}
            disabled={isCheckoutLoading}
            className='bg-[#7516FF] w-full py-2.5 sm:py-3 flex gap-2 items-center justify-center rounded-md mt-2'
          >
            {isCheckoutLoading ? (
              <span className='animate-pulse text-xs sm:text-sm'>
                Processing...
              </span>
            ) : (
              <>
                <FaCreditCard className='text-sm sm:text-lg' />
                <span className='text-xs sm:text-sm font-semibold'>
                  Subscribe Now
                </span>
              </>
            )}
          </button>
        </div>

        <div className='text-secondary text-[11px] sm:text-sm mt-1'>
          Need help? Join our{' '}
          <a href='#' className='text-main'>
            Discord server
          </a>{' '}
          for support.
        </div>
      </div>
    </section>
  )
}

export default NoActiveSubscription
