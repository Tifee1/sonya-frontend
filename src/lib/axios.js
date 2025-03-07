import axios from 'axios'
import { navigator } from './navigator'
import { toast } from 'sonner'

export const BASE_URL = import.meta.env.VITE_BACKEND_URL

const customAxios = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  credentials: 'include',
})

export const api = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  credentials: 'include',
})

const handleLogout = async () => {
  try {
    await customAxios.get('/auth/logout')
  } catch (error) {
    console.error('Logout error:')
  } finally {
    const navigate = navigator.getNavigate()
    if (navigate) {
      navigate('/', { replace: true })
    } else {
      window.location.href = '/'
    }
  }
}

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) {
      // toast.error('Network error. Please check your connection.')
      return Promise.reject(error)
    }

    const isLogoutRoute = error.config.url.includes('/auth/logout')

    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !isLogoutRoute
    ) {
      toast.error('Session expired. Please login again.')
      await handleLogout()
    }

    return Promise.reject(error)
  }
)

export default customAxios
