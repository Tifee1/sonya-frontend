import customAxios from '../lib/axios'

export const getUser = async () => {
  try {
    const response = await customAxios('/user')

    return response.data
  } catch (error) {
    throw error
  }
}
