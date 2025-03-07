import customAxios from '../lib/axios'

export const createSession = async (data) => {
  try {
    const response = await customAxios.post(
      '/subscription/create-checkout-session',
      data
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const createCustomerPortal = async () => {
  try {
    const response = await customAxios.get('/subscription/customer-portal')
    return response.data
  } catch (error) {
    throw error
  }
}

export const checkSession = async (data) => {
  try {
    const response = await customAxios.post(
      '/subscription/check-session-status',
      data
    )
    return response.data
  } catch (error) {
    throw error
  }
}
