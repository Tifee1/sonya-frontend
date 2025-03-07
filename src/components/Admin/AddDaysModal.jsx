import React, { useState } from 'react'
import { LuLoader } from 'react-icons/lu'

const AddDaysModal = ({
  setShowAddDaysModal,
  selectedSubscription,
  setSelectedSubscription,
  handleAddDays,
  actionLoading,
}) => {
  const [daysToAdd, setDaysToAdd] = useState(0)
  return (
    <div className='fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center z-50'>
      <div className='bg-slate-900 rounded-xl border border-slate-800 p-6 w-full max-w-md mx-4 shadow-xl'>
        <h2 className='text-xl font-bold mb-2 text-white'>Add Free Days</h2>
        <p className='text-slate-400 text-sm mb-6'>
          Adding free days to{' '}
          <span className='text-white font-medium'>
            {selectedSubscription?.user?.username || 'this user'}
          </span>
          's subscription
        </p>

        <div className='mb-6'>
          <label className='block text-slate-400 text-sm mb-2 font-medium'>
            Number of days to add
          </label>
          <input
            type='number'
            className='bg-slate-950 border border-slate-800 text-white text-sm rounded-lg block w-full p-3 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200'
            value={daysToAdd}
            onChange={(e) => setDaysToAdd(e.target.value)}
          />
        </div>

        <div className='flex justify-end gap-3'>
          <button
            onClick={() => {
              setShowAddDaysModal(false)
              setSelectedSubscription(null)
            }}
            className='px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={() => handleAddDays(daysToAdd)}
            disabled={daysToAdd <= 0 || actionLoading}
            className='px-4 py-2 bg-cyan-500 text-slate-900 font-medium rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {actionLoading ? (
              <LuLoader className='animate-spin mx-auto h-5 w-5' />
            ) : (
              'Add Days'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddDaysModal
