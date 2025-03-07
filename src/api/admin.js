import customAxios from '../lib/axios'

export const getAllSubscriptions = async ({ params }) => {
  try {
    const response = await customAxios('/admin/subscriptions', { params })
    return response.data
  } catch (error) {
    throw error
  }
}
export const addDaysToSubscription = async ({ id, days }) => {
  try {
    const response = await customAxios.post(
      `/admin/subscriptions/${id}/add-days`,
      {
        days,
      }
    )
    return response.data
  } catch (error) {
    throw error
  }
}
export const pauseSubscription = async ({ id }) => {
  try {
    const response = await customAxios.post(`/admin/subscriptions/${id}/pause`)
    return response.data
  } catch (error) {
    throw error
  }
}
export const resumeSubscription = async ({ id }) => {
  try {
    const response = await customAxios.post(`/admin/subscriptions/${id}/resume`)
    return response.data
  } catch (error) {
    throw error
  }
}
export const cancelSubscription = async ({ id }) => {
  try {
    const response = await customAxios.post(`/admin/subscriptions/${id}/cancel`)
    return response.data
  } catch (error) {
    throw error
  }
}
export const terminateSubscription = async ({ id }) => {
  try {
    const response = await customAxios.post(
      `/admin/subscriptions/${id}/terminate`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
