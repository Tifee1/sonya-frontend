import customAxios from '../lib/axios'

export const logOut = async () => {
  try {
    const response = await customAxios('/auth/logout')
    return response.data
  } catch (error) {
    throw error
  }
}
