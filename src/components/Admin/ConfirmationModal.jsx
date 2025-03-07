import React from 'react'
import { LuLoader } from 'react-icons/lu'

const ConfirmationModal = ({
  confirmAction,
  setConfirmAction,
  setShowConfirmModal,
  handleAction,
  actionLoading,
}) => {
  return (
    <div className='fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center z-50'>
      <div className='bg-slate-900 rounded-xl border border-slate-800 p-6 w-full max-w-md mx-4 shadow-xl'>
        <h2 className='text-xl font-bold mb-2 text-white'>Confirm Action</h2>
        <p className='text-slate-400 text-sm mb-6'>
          {confirmAction.type === 'pause' &&
            'Are you sure you want to pause this subscription? The user will not be able to use the service until unpaused.'}
          {confirmAction.type === 'unpause' &&
            'Are you sure you want to resume this subscription?'}
          {confirmAction.type === 'cancel' &&
            'Are you sure you want to cancel this subscription? This will stop automatic renewals.'}
          {confirmAction.type === 'terminate' &&
            'Are you sure you want to terminate this subscription and invalidate any associated keys? This action cannot be undone.'}
        </p>

        <div className='flex justify-end gap-3'>
          <button
            onClick={() => {
              setShowConfirmModal(false)
              setConfirmAction({ type: '', id: null })
            }}
            className='px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={handleAction}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              confirmAction.type === 'terminate'
                ? 'bg-red-500 text-white hover:bg-red-400'
                : confirmAction.type === 'cancel'
                ? 'bg-rose-500 text-white hover:bg-rose-400'
                : confirmAction.type === 'pause'
                ? 'bg-amber-500 text-slate-900 hover:bg-amber-400'
                : 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'
            }`}
            disabled={actionLoading}
          >
            {actionLoading ? (
              <LuLoader className='animate-spin mx-auto h-5 w-5' />
            ) : (
              'Confirm'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
