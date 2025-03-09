import React, { useState } from 'react'
import { FaCreditCard, FaLock, FaTags } from 'react-icons/fa'
import { toast } from 'sonner'
import { loadStripe } from '@stripe/stripe-js'
import { createSession } from '../../api/subscription'

const NoActiveSubscription = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('monthly')
  const [isCouponOpen, setIsCouponOpen] = useState(false)

  // Pricing constants
  const INITIAL_FEE = 50.0
  const MONTHLY_PRICE = 30.0
  const YEARLY_PRICE = 25.0 * 12 // $25/month billed annually
  const YEARLY_MONTHLY_EQUIVALENT = 25.0

  // Calculate savings percentage for yearly plan
  const savingsPercent = Math.round(
    ((MONTHLY_PRICE * 12 - YEARLY_PRICE) / (MONTHLY_PRICE * 12)) * 100
  )

  const handleSubscribe = async () => {
    const stripe = await stripePromise
    try {
      setIsCheckoutLoading(true)

      const response = await createSession({
        couponCode,
        plan: selectedPlan,
      })

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

  // Toggle between monthly and yearly plans
  const togglePlan = (plan) => {
    setSelectedPlan(plan)
  }

  return (
    <section className='w-[90%] max-w-3xl mx-auto py-[15px] flex flex-col gap-6 mt-[20px] sm:mt-[60px]'>
      <div className='flex flex-col items-center gap-2 text-center mb-2'>
        <div className='bg-[#7516FF]/20 p-3 rounded-full mb-1'>
          <FaLock className='text-2xl sm:text-3xl text-[#7516FF]' />
        </div>
        <h1 className='text-xl sm:text-2xl font-bold'>
          Choose Your Sonya Membership
        </h1>
        <p className='text-secondary text-sm sm:text-base max-w-lg mx-auto'>
          Select a plan that works for you and start using Sonya's premium
          features today.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full'>
        {/* Monthly Plan Card */}
        <div
          className={`bg-dark-2 rounded-xl overflow-hidden transition-all duration-300 ${
            selectedPlan === 'monthly' ? 'ring-2 ring-[#7516FF]' : 'opacity-80'
          }`}
          onClick={() => togglePlan('monthly')}
        >
          <div className='p-5 cursor-pointer flex h-full flex-col justify-between'>
            <div>
              <div className='flex justify-between items-start mb-5'>
                <div>
                  <h3 className='text-lg font-bold'>Monthly</h3>
                  <p className='text-secondary text-sm'>Flexible billing</p>
                </div>
                <div className='flex flex-col items-end'>
                  <div className='text-xl font-bold'>
                    ${MONTHLY_PRICE.toFixed(2)}
                  </div>
                  <div className='text-secondary text-xs'>per month</div>
                </div>
              </div>

              <div className='space-y-3 my-5'>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-secondary'>Initial Fee</span>
                  <span>${INITIAL_FEE.toFixed(2)} USD</span>
                </div>

                <div className='flex justify-between items-center text-sm'>
                  <span className='text-secondary'>Monthly Billing</span>
                  <span>${MONTHLY_PRICE.toFixed(2)} USD</span>
                </div>
              </div>
            </div>
            <button
              className={`mt-4 w-full py-3 rounded-lg font-medium text-sm transition-colors ${
                selectedPlan === 'monthly'
                  ? 'bg-[#7516FF] text-white'
                  : 'bg-dark-3 text-white'
              }`}
              onClick={() => togglePlan('monthly')}
            >
              {selectedPlan === 'monthly' ? 'Selected' : 'Select Monthly'}
            </button>
          </div>
        </div>

        {/* Yearly Plan Card */}
        <div
          className={`bg-dark-2 rounded-xl overflow-hidden relative transition-all duration-300 ${
            selectedPlan === 'yearly' ? 'ring-2 ring-[#7516FF]' : 'opacity-80'
          }`}
          onClick={() => togglePlan('yearly')}
        >
          {/* Best Value tag */}
          <div className='absolute top-0 right-0 bg-[#7516FF] text-white text-xs font-bold py-1 px-3 rounded-bl-lg'>
            BEST VALUE
          </div>

          <div className='p-5 cursor-pointer'>
            <div className='flex justify-between items-start mb-5'>
              <div>
                <h3 className='text-lg font-bold'>Annual</h3>
                <p className='text-secondary text-sm'>
                  Save {savingsPercent}% yearly
                </p>
              </div>
              <div className='flex flex-col items-end'>
                <div className='text-xl font-bold'>
                  ${YEARLY_MONTHLY_EQUIVALENT.toFixed(2)}
                </div>
                <div className='text-secondary text-xs'>per month</div>
              </div>
            </div>

            <div className='space-y-3 my-5'>
              <div className='flex justify-between items-center text-sm'>
                <span className='text-secondary'>Initial Fee</span>
                <span>${INITIAL_FEE.toFixed(2)} USD</span>
              </div>

              <div className='flex justify-between items-center text-sm'>
                <span className='text-secondary'>Annual Billing</span>
                <span>${YEARLY_PRICE.toFixed(2)} USD</span>
              </div>

              <div className='flex justify-between items-center text-sm text-green-400'>
                <span>Total Savings</span>
                <span>
                  ${(MONTHLY_PRICE * 12 - YEARLY_PRICE).toFixed(2)} USD
                </span>
              </div>
            </div>

            <button
              className={`mt-4 w-full py-3 rounded-lg font-medium text-sm transition-colors ${
                selectedPlan === 'yearly'
                  ? 'bg-[#7516FF] text-white'
                  : 'bg-dark-3 text-white'
              }`}
              onClick={() => togglePlan('yearly')}
            >
              {selectedPlan === 'yearly' ? 'Selected' : 'Select Annual'}
            </button>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className='bg-dark-2 p-5 sm:p-6 rounded-xl mx-auto w-full mt-4'>
        <h3 className='text-lg font-bold mb-4'>Order Summary</h3>

        <div className='space-y-3 mb-5'>
          <div className='flex justify-between items-center text-sm'>
            <span className='text-secondary'>Initial Fee</span>
            <span>${INITIAL_FEE.toFixed(2)} USD</span>
          </div>

          <div className='flex justify-between items-center text-sm'>
            <span className='text-secondary'>
              {selectedPlan === 'monthly' ? 'Monthly' : 'Annual'} Subscription
            </span>
            <span>
              $
              {selectedPlan === 'monthly'
                ? MONTHLY_PRICE.toFixed(2)
                : YEARLY_PRICE.toFixed(2)}{' '}
              USD
            </span>
          </div>

          <div className='h-px bg-dark-3 my-2'></div>

          <div className='flex justify-between items-center font-bold'>
            <span>Total</span>
            <span>
              $
              {(
                INITIAL_FEE +
                (selectedPlan === 'monthly' ? MONTHLY_PRICE : YEARLY_PRICE)
              ).toFixed(2)}{' '}
              USD
            </span>
          </div>
        </div>

        {/* Coupon Code */}
        <div className='mb-5'>
          <button
            onClick={() => setIsCouponOpen(!isCouponOpen)}
            className='flex items-center text-sm text-secondary hover:text-white transition-colors'
          >
            <FaTags className='mr-2' />
            {isCouponOpen ? 'Hide discount code' : 'Have a discount code?'}
          </button>

          {isCouponOpen && (
            <div className='mt-3'>
              <input
                type='text'
                placeholder='Enter coupon code'
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className='w-full bg-dark-3 text-white placeholder:text-secondary text-sm p-2.5 rounded-md outline-none border border-dark-4'
              />
            </div>
          )}
        </div>

        <button
          onClick={handleSubscribe}
          disabled={isCheckoutLoading}
          className='bg-[#7516FF] hover:bg-[#7516FF]/90 w-full py-3.5 flex gap-2 items-center justify-center rounded-lg transition-colors'
        >
          {isCheckoutLoading ? (
            <span className='animate-pulse text-sm'>Processing...</span>
          ) : (
            <>
              <FaCreditCard className='text-lg' />
              <span className='text-sm font-semibold'>Proceed to Checkout</span>
            </>
          )}
        </button>
      </div>

      <div className='text-center text-secondary text-xs mt-4'>
        Need help? Join our{' '}
        <a href='#' className='text-[#7516FF]'>
          Discord server
        </a>{' '}
        for support.
      </div>
    </section>
  )
}

export default NoActiveSubscription
