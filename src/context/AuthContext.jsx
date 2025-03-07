import React, { createContext, useState, useEffect } from 'react'
import { api } from '../lib/axios'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const validateSession = async () => {
      try {
        const res = await api('/auth/me')

        const { data } = await res.data

        if (data && (data.id || data.userId)) {
          setUser(data)
        } else {
          setUser(null)
        }
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    validateSession()
  }, [])

  const value = {
    user,
    setUser,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
