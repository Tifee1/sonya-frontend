import React, { useEffect, useState } from 'react'
import Logo from '../assets/svgs/Logo'
import { RiArrowDownSLine } from 'react-icons/ri'
import LogOut from '../assets/svgs/LogOut'

import 'react-circular-progressbar/dist/styles.css'

import { getUser } from '../api/user'
import { logOut } from '../api/auth'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

import NoActiveSubscription from '../components/Dashboard/NoActiveSubscription'
import ActiveSubscription from '../components/Dashboard/ActiveSubscription'
import ExpiredSubscription from '../components/Dashboard/ExpiredSubscription'
import dayjs from 'dayjs'

const DashboardPage = () => {
  const { setUser } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [userProfile, setUserProfile] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      setError(false)
      try {
        const response = await getUser()
        setUserProfile(response.data)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUser()
  }, [])

  const logoutUser = async () => {
    try {
      await logOut()
      setUser(null)
      navigate('/')
    } catch (error) {
      setUser(null)
      navigate('/')
    }
  }

  if (isLoading) {
    return (
      <div className='min-h-screen bg-dark-1 flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-main'></div>
      </div>
    )
  }

  // Check if user has an active subscription

  const hasActiveSubscription = userProfile?.subscription?.active

  return (
    <>
      <header className='bg-dark-2'>
        <div className='w-full max-w-7xl mx-auto px-6 py-[18px] flex justify-between'>
          <div className='flex items-end'>
            <img src='/assets/sonya-logo.svg' alt='sonya logo' />
            <span className='font-rocgrotesk text-[15px] font-medium'>
              Sonya
            </span>
          </div>
          <div className='flex gap-2.5'>
            <div className='bg-dark-2 sm:w-[181px] flex justify-between gap-2 items-center border border-dark-4 rounded-md p-[3px]'>
              <div className='flex w-full overflow-hidden gap-2 items-center'>
                {userProfile?.avatar ? (
                  <img
                    src={userProfile.avatar}
                    alt={userProfile?.username || 'profile'}
                    className='rounded-full w-[30px] h-[30px]'
                  />
                ) : (
                  <Logo />
                )}
                <span className='hidden sm:inline-block text-sm font-semibold truncate  line-clamp-1'>
                  {userProfile?.username || userProfile?.email}
                </span>
              </div>
              <span className='text-secondary'>
                <RiArrowDownSLine />
              </span>
            </div>
            <button
              className='bg-dark-4 px-3 sm:px-0 sm:w-[128px] flex items-center justify-center gap-2 rounded-md'
              onClick={logoutUser}
            >
              <LogOut />
              <span className='hidden sm:inline-block text-secondary text-xs font-semibold'>
                Logout
              </span>
            </button>
          </div>
        </div>
      </header>

      {userProfile?.subscription?.terminated ? (
        <section className='w-[90%] max-w-3xl mx-auto py-[15px] flex flex-col gap-4 mt-[20px] sm:mt-[86px]'>
          <div className='bg-dark-2 p-4 sm:p-6 rounded-[10px] text-center'>
            <div className='flex flex-col items-center gap-4'>
              <div className='bg-[#FF166A]/10 text-[#FF166A] px-3 py-1 rounded-md text-sm font-medium'>
                Subscription Terminated
              </div>

              <h2 className='text-lg sm:text-xl font-semibold'>
                Your subscription has been terminated
              </h2>

              <p className='text-secondary text-xs sm:text-sm max-w-lg'>
                Your subscription was terminated on{' '}
                {dayjs(userProfile?.subscription?.terminatedAt).format(
                  'MMMM DD, YYYY'
                )}
                . Contact support for more info.
              </p>
            </div>
          </div>
        </section>
      ) : hasActiveSubscription ? (
        // Show dashboard if user has active subscription
        <ActiveSubscription userProfile={userProfile} />
      ) : userProfile?.subscription?.stripeSubscriptionId ? (
        <ExpiredSubscription userProfile={userProfile} />
      ) : (
        // Show subscription purchase prompt if no active subscription
        <NoActiveSubscription />
      )}
    </>
  )
}

export default DashboardPage
