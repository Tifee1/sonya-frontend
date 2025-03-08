'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { RiArrowDownSLine } from 'react-icons/ri'
import LogOut from '../assets/svgs/LogOut'
import Logo from '../assets/svgs/Logo'
import { logOut } from '../api/auth'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { FaSearch, FaSpinner } from 'react-icons/fa'
import {
  LuCalendarPlus,
  LuFilter,
  LuLoader,
  LuLock,
  LuPause,
  LuPlay,
  LuX,
} from 'react-icons/lu'
import { FiAlertCircle } from 'react-icons/fi'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import {
  cancelSubscription,
  getAllSubscriptions,
  pauseSubscription,
  resumeSubscription,
  terminateSubscription,
} from '../api/admin'
import AddDaysModal from '../components/Admin/AddDaysModal'
import ConfirmationModal from '../components/Admin/ConfirmationModal'

dayjs.extend(advancedFormat)

const AdminDashboardPage = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    status: 'all',
    plan: 'all',
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [itemsPerPage] = useState(10)
  const [selectedSubscription, setSelectedSubscription] = useState(null)
  const [showAddDaysModal, setShowAddDaysModal] = useState(false)
  const [daysToAdd, setDaysToAdd] = useState(0)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [confirmAction, setConfirmAction] = useState({ type: '', id: null })
  const [actionLoading, setActionLoading] = useState(false)
  const [expandedRow, setExpandedRow] = useState(null)
  const [availablePlans, setAvailablePlans] = useState(['monthly', 'yearly'])

  const navigate = useNavigate()
  const { setUser, user } = useAuth()

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

  const fetchSubscriptions = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // Convert frontend filters to backend format
      const backendParams = {
        page: currentPage,
        limit: itemsPerPage,
      }

      // Add status filter if not "all"
      if (filters.status !== 'all') {
        backendParams.status = filters.status
      }

      // Add plan filter if not "all"
      if (filters.plan !== 'all') {
        backendParams.plan = filters.plan
      }

      // Add search term if present
      if (searchTerm.trim()) {
        backendParams.search = searchTerm.trim()
      }

      // Fetch subscriptions from API
      const response = await getAllSubscriptions({ params: backendParams })

      setSubscriptions(response.data.subscriptions || [])
      setTotalCount(response.data.total || 0)
    } catch (error) {
      setError('Failed to fetch subscriptions')
      toast.error('Failed to load subscription data')
    } finally {
      setIsLoading(false)
    }
  }
  // Fetch subscriptions data
  useEffect(() => {
    fetchSubscriptions()
  }, [filters, currentPage, itemsPerPage, searchTerm])

  // Pagination
  const totalPages = Math.ceil(totalCount / itemsPerPage)

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Handle add free days
  const handleAddDays = async () => {
    if (!selectedSubscription || daysToAdd <= 0) return

    setActionLoading(true)
    try {
      await addDaysToSubscription({
        id: selectedSubscription._id,
        days: parseInt(daysToAdd),
      })

      toast.success(`Added ${daysToAdd} days to subscription`)

      await fetchSubscriptions()

      setShowAddDaysModal(false)
      setDaysToAdd(0)
      setSelectedSubscription(null)
    } catch (error) {
      toast.error('Failed to add days')
    } finally {
      setActionLoading(false)
    }
  }

  // Handle subscription actions (pause, unpause, cancel, terminate)
  const handleAction = async () => {
    if (!confirmAction.id) return

    setActionLoading(true)
    try {
      let successMessage = ''

      // Call appropriate API based on action type
      switch (confirmAction.type) {
        case 'pause':
          await pauseSubscription({ id: confirmAction.id })
          successMessage = 'Subscription paused successfully'
          break
        case 'unpause':
          await resumeSubscription({ id: confirmAction.id })
          successMessage = 'Subscription resumed successfully'
          break
        case 'cancel':
          await cancelSubscription({ id: confirmAction.id })
          successMessage = 'Subscription cancelled successfully'
          break
        case 'terminate':
          await terminateSubscription({ id: confirmAction.id })
          successMessage = 'Subscription and key terminated successfully'
          break
        default:
          throw new Error('Invalid action type')
      }

      toast.success(successMessage)
      await fetchSubscriptions()

      setShowConfirmModal(false)
      setConfirmAction({ type: '', id: null })
    } catch (error) {
      toast.error(`Failed to ${confirmAction.type} subscription`)
    } finally {
      setActionLoading(false)
    }
  }

  // Get status badge styling
  const getStatusBadgeStyle = (subscription) => {
    if (subscription.cancelled) {
      return 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
    } else if (subscription.paused) {
      return 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
    } else if (subscription.active) {
      return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
    } else {
      return 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
    }
  }

  // Toggle row expansion for mobile view
  const toggleRowExpansion = (id) => {
    setExpandedRow(expandedRow === id ? null : id)
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200'>
      <header className='bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-10'>
        <div className='w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <img
              src='/assets/sonya-logo.svg'
              alt='sonya logo'
              className='h-8 w-auto'
            />
            <div className='flex flex-col'>
              <span className='font-rocgrotesk text-lg font-medium text-white'>
                Sonya Admin
              </span>
              <span className='text-xs text-slate-400'>
                Subscription Management
              </span>
            </div>
          </div>

          <div className='flex gap-2.5'>
            <div className='bg-dark-2 sm:w-[181px] flex justify-between gap-2 items-center border border-dark-4 rounded-md p-[3px]'>
              <div className='flex w-full overflow-hidden gap-2 items-center'>
                {user?.avatar ? (
                  <img
                    src={user.avatar || '/placeholder.svg'}
                    alt={user?.username || 'profile'}
                    className='rounded-full w-[30px] h-[30px]'
                  />
                ) : (
                  <Logo />
                )}
                <span className='hidden sm:inline-block text-sm font-semibold truncate line-clamp-1'>
                  {user?.username || user?.email}
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
      <main className='px-4 sm:px-6 py-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-8'>
            <h1 className='text-2xl font-bold text-white mb-2'>
              User Management Dashboard
            </h1>
            <p className='text-slate-400 text-sm'>
              Manage user subscriptions, add free days, or modify subscription
              status
            </p>
          </div>

          <div className='bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 shadow-lg overflow-hidden'>
            {/* Search and Filter Section */}
            <div className='p-4 sm:p-6 border-b border-slate-800'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='relative flex-grow'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400'>
                    <FaSearch className='w-4 h-4' />
                  </div>
                  <input
                    type='text'
                    className='bg-slate-950 border border-slate-800 text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200'
                    placeholder='Search by username, email, or customer ID...'
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setCurrentPage(1) // Reset to first page on search
                    }}
                  />
                </div>

                <div className='flex gap-2 flex-wrap sm:flex-nowrap'>
                  <select
                    className='bg-slate-950 border border-slate-800 text-white text-sm rounded-lg p-2.5 outline-none focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200'
                    value={filters.status}
                    onChange={(e) => {
                      setFilters({ ...filters, status: e.target.value })
                      setCurrentPage(1) // Reset to first page on filter change
                    }}
                  >
                    <option value='all'>All Status</option>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                    <option value='paused'>Paused</option>
                    <option value='cancelled'>Cancelled</option>
                  </select>

                  <select
                    className='bg-slate-950 border border-slate-800 text-white text-sm rounded-lg p-2.5 outline-none focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200'
                    value={filters.plan}
                    onChange={(e) => {
                      setFilters({ ...filters, plan: e.target.value })
                      setCurrentPage(1) // Reset to first page on filter change
                    }}
                  >
                    <option value='all'>All Plans</option>
                    {availablePlans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan.charAt(0).toUpperCase() + plan.slice(1)}
                      </option>
                    ))}
                  </select>

                  <button
                    className='flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors'
                    onClick={() => {
                      setFilters({ status: 'all', plan: 'all' })
                      setSearchTerm('')
                      setCurrentPage(1) // Reset to first page
                    }}
                  >
                    <LuX className='w-[14px] h-[14px]' />
                    <span className='text-sm'>Reset</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Subscriptions Table */}
            <div className='overflow-x-auto'>
              {isLoading ? (
                <div className='flex justify-center items-center py-20'>
                  <div className='flex flex-col items-center gap-2'>
                    <FaSpinner className='animate-spin text-main text-2xl' />
                    <p className='text-sm text-slate-400'>
                      Loading subscriptions...
                    </p>
                  </div>
                </div>
              ) : error ? (
                <div className='flex justify-center items-center py-20'>
                  <div className='flex flex-col items-center gap-2'>
                    <FiAlertCircle className='text-rose-500 h-8 w-8' />
                    <p className='text-rose-500'>
                      {error || 'An error occured'}
                    </p>
                  </div>
                </div>
              ) : subscriptions.length === 0 ? (
                <div className='flex justify-center items-center py-20'>
                  <div className='flex flex-col items-center gap-2'>
                    <LuFilter className='text-slate-400 h-8 w-8' />
                    <p className='text-slate-400'>No subscriptions found</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className='hidden md:block'>
                    <table className='w-full text-sm text-left'>
                      <thead className='text-xs uppercase bg-slate-950/50 text-slate-400 border-b border-slate-800'>
                        <tr>
                          <th scope='col' className='px-6 py-4 font-medium'>
                            User
                          </th>
                          <th scope='col' className='px-6 py-4 font-medium'>
                            Plan
                          </th>
                          <th scope='col' className='px-6 py-4 font-medium'>
                            Status
                          </th>
                          <th scope='col' className='px-6 py-4 font-medium'>
                            Expires
                          </th>
                          <th scope='col' className='px-6 py-4 font-medium'>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-slate-800'>
                        {subscriptions.map((subscription) => (
                          <tr
                            key={subscription._id}
                            className='hover:bg-slate-800/20 transition-colors'
                          >
                            <td className='px-6 py-4'>
                              <div className='flex items-center gap-3'>
                                {subscription.user?.avatar ? (
                                  <img
                                    src={
                                      subscription.user.avatar ||
                                      '/placeholder.svg'
                                    }
                                    alt={subscription.user?.username || 'User'}
                                    className='w-10 h-10 rounded-full object-cover border border-slate-700'
                                  />
                                ) : (
                                  <div className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-sm font-medium border border-slate-700'>
                                    {subscription.user?.username?.[0]?.toUpperCase() ||
                                      'U'}
                                  </div>
                                )}
                                <div>
                                  <div className='font-medium text-white'>
                                    {subscription.user?.username ||
                                      'Unknown User'}
                                  </div>
                                  <div className='text-xs text-slate-400'>
                                    {subscription.user?.email || 'No email'}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='px-6 py-4'>
                              <div className='flex items-center'>
                                <span className='capitalize font-medium'>
                                  {subscription.plan}
                                </span>
                                {subscription.plan === 'lifetime' && (
                                  <span className='ml-2 px-2 py-0.5 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-500/20'>
                                    Forever
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className='px-6 py-4'>
                              <span
                                className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeStyle(
                                  subscription
                                )}`}
                              >
                                {subscription.cancelled
                                  ? 'Cancelled'
                                  : subscription.paused
                                  ? 'Paused'
                                  : subscription.active
                                  ? 'Active'
                                  : 'Inactive'}
                              </span>
                            </td>
                            <td className='px-6 py-4'>
                              <div className='flex items-center gap-1.5'>
                                <span>
                                  {subscription.expiresAt
                                    ? dayjs(subscription.expiresAt).format(
                                        'MMM D, YYYY'
                                      )
                                    : 'N/A'}
                                </span>
                                {subscription.additionalDays > 0 && (
                                  <span className='ml-2 text-xs px-1.5 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'>
                                    +{subscription.additionalDays} days
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className='px-6 py-4'>
                              <div className='flex gap-2'>
                                <button
                                  onClick={() => {
                                    setSelectedSubscription(subscription)
                                    setShowAddDaysModal(true)
                                  }}
                                  title='Add days'
                                  className='p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors'
                                >
                                  <LuCalendarPlus className='w-4 h-4' />
                                </button>

                                {subscription.paused ? (
                                  <button
                                    onClick={() => {
                                      setConfirmAction({
                                        type: 'unpause',
                                        id: subscription._id,
                                      })
                                      setShowConfirmModal(true)
                                    }}
                                    title='Resume subscription'
                                    className='p-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors'
                                  >
                                    <LuPlay className='w-4 h-4' />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      setConfirmAction({
                                        type: 'pause',
                                        id: subscription._id,
                                      })
                                      setShowConfirmModal(true)
                                    }}
                                    title='Pause subscription'
                                    className='p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors'
                                  >
                                    <LuPause className='w-4 h-4' />
                                  </button>
                                )}

                                {!subscription.cancelled && (
                                  <button
                                    onClick={() => {
                                      setConfirmAction({
                                        type: 'cancel',
                                        id: subscription._id,
                                      })
                                      setShowConfirmModal(true)
                                    }}
                                    title='Cancel subscription'
                                    className='p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors'
                                  >
                                    <LuX className='w-4 h-4' />
                                  </button>
                                )}

                                <button
                                  onClick={() => {
                                    setConfirmAction({
                                      type: 'terminate',
                                      id: subscription._id,
                                    })
                                    setShowConfirmModal(true)
                                  }}
                                  title='Terminate subscription and key'
                                  className='p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors'
                                >
                                  <LuLock className='w-4 h-4' />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className='md:hidden'>
                    <div className='divide-y divide-slate-800'>
                      {subscriptions.map((subscription) => (
                        <div
                          key={subscription._id}
                          className='p-4 hover:bg-slate-800/20 transition-colors'
                        >
                          <div className='flex justify-between items-start mb-3'>
                            <div className='flex items-center gap-3'>
                              {subscription.user?.avatar ? (
                                <img
                                  src={
                                    subscription.user.avatar ||
                                    '/placeholder.svg'
                                  }
                                  alt={subscription.user?.username || 'User'}
                                  className='w-10 h-10 rounded-full object-cover border border-slate-700'
                                />
                              ) : (
                                <div className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-sm font-medium border border-slate-700'>
                                  {subscription.user?.username?.[0]?.toUpperCase() ||
                                    'U'}
                                </div>
                              )}
                              <div>
                                <div className='font-medium text-white'>
                                  {subscription.user?.username ||
                                    'Unknown User'}
                                </div>
                                <div className='text-xs text-slate-400'>
                                  {subscription.user?.email || 'No email'}
                                </div>
                              </div>
                            </div>
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeStyle(
                                subscription
                              )}`}
                            >
                              {subscription.cancelled
                                ? 'Cancelled'
                                : subscription.paused
                                ? 'Paused'
                                : subscription.active
                                ? 'Active'
                                : 'Inactive'}
                            </span>
                          </div>

                          <div className='grid gap-2 mb-3'>
                            <div className='flex gap-2 items-center'>
                              <div className='text-slate-400 text-xs'>
                                Plan:
                              </div>
                              <div className='text-sm font-medium flex items-center'>
                                <span className='capitalize'>
                                  {subscription.plan}
                                </span>
                                {subscription.plan === 'lifetime' && (
                                  <span className='ml-2 px-2 py-0.5 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-500/20'>
                                    Forever
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                              <div className='text-slate-400 text-xs'>
                                Expires:
                              </div>
                              <div className='text-sm flex items-center gap-1'>
                                <span>
                                  {subscription.expiresAt
                                    ? dayjs(subscription.expiresAt).format(
                                        'MMM D, YYYY'
                                      )
                                    : 'N/A'}
                                </span>
                                {subscription.additionalDays > 0 && (
                                  <span className='ml-1 text-xs px-1.5 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'>
                                    +{subscription.additionalDays} days
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className='flex gap-2 mt-3 justify-end'>
                            <button
                              onClick={() => {
                                setSelectedSubscription(subscription)
                                setShowAddDaysModal(true)
                              }}
                              title='Add days'
                              className='p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors'
                            >
                              <LuCalendarPlus className='w-4 h-4' />
                            </button>

                            {subscription.paused ? (
                              <button
                                onClick={() => {
                                  setConfirmAction({
                                    type: 'unpause',
                                    id: subscription._id,
                                  })
                                  setShowConfirmModal(true)
                                }}
                                title='Resume subscription'
                                className='p-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors'
                              >
                                <LuPlay className='w-4 h-4' />
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setConfirmAction({
                                    type: 'pause',
                                    id: subscription._id,
                                  })
                                  setShowConfirmModal(true)
                                }}
                                title='Pause subscription'
                                className='p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors'
                              >
                                <LuPause className='w-4 h-4' />
                              </button>
                            )}

                            {!subscription.cancelled && (
                              <button
                                onClick={() => {
                                  setConfirmAction({
                                    type: 'cancel',
                                    id: subscription._id,
                                  })
                                  setShowConfirmModal(true)
                                }}
                                title='Cancel subscription'
                                className='p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors'
                              >
                                <LuX className='w-4 h-4' />
                              </button>
                            )}

                            <button
                              onClick={() => {
                                setConfirmAction({
                                  type: 'terminate',
                                  id: subscription._id,
                                })
                                setShowConfirmModal(true)
                              }}
                              title='Terminate subscription and key'
                              className='p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors'
                            >
                              <LuLock className='w-4 h-4' />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Pagination */}
            {subscriptions.length > 0 && (
              <div className='flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 border-t border-slate-800 gap-4'>
                <div className='text-sm text-slate-400 text-center sm:text-left'>
                  Showing{' '}
                  <span className='font-medium text-white'>
                    {(currentPage - 1) * itemsPerPage + 1}
                  </span>
                  -
                  <span className='font-medium text-white'>
                    {Math.min(currentPage * itemsPerPage, totalCount)}
                  </span>{' '}
                  of{' '}
                  <span className='font-medium text-white'>{totalCount}</span>{' '}
                  items
                </div>
                <div className='flex'>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='p-2 border border-slate-700 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors'
                  >
                    <FaChevronLeft size={16} />
                    <span className='sr-only'>Previous</span>
                  </button>
                  <div className='flex overflow-x-auto max-w-[200px] sm:max-w-none'>
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      const pageNumber = i + 1
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`min-w-[40px] py-2 border-t border-b border-slate-700 ${
                            currentPage === pageNumber
                              ? 'bg-cyan-500 text-slate-900 font-medium border-cyan-500'
                              : 'hover:bg-slate-800 text-slate-200'
                          } transition-colors`}
                        >
                          {pageNumber}
                        </button>
                      )
                    })}
                  </div>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='p-2 border border-slate-700 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors'
                  >
                    <FaChevronRight size={16} />
                    <span className='sr-only'>Next</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Add Days Modal */}
      {showAddDaysModal && (
        <AddDaysModal
          actionLoading={actionLoading}
          handleAddDays={handleAddDays}
          selectedSubscription={selectedSubscription}
          setSelectedSubscription={setSelectedSubscription}
          setShowAddDaysModal={setShowAddDaysModal}
        />
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <ConfirmationModal
          actionLoading={actionLoading}
          confirmAction={confirmAction}
          handleAction={handleAction}
          setConfirmAction={setConfirmAction}
          setShowConfirmModal={setShowConfirmModal}
        />
      )}
    </div>
  )
}

export default AdminDashboardPage
