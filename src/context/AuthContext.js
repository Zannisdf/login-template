import React, { useState, useEffect, useContext } from 'react'
import { useAsync } from 'react-async'

import * as authClient from '../utils/authClient'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const [isFinished, setIsFinished] = useState(false)
  const {
    data = { user: null },
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({ promiseFn: authClient.getUser })

  useEffect(() => {
    if (isSettled) {
      setIsFinished(true)
    }
  }, [isSettled])

  if (!isFinished) {
    if (isPending) {
      return <div>Loading...</div>
    }
    if (isRejected) {
      return (
        <div>
          There has been an error, please try again. Error: {error.message}
        </div>
      )
    }
  }

  const login = credentials => authClient.login(credentials).then(reload)
  const logout = credentials => authClient.logout(credentials).then(reload)

  return <AuthContext.Provider value={{ data, login, logout }} {...props} />
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('UseAuth should be called within an Auth Provider')
  }

  return context
}

export default AuthProvider
