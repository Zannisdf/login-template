import React, { useContext } from 'react'

import { useAuth } from './AuthContext'

const UserContext = React.createContext()

const UserProvider = props => {
  const {
    data: { username },
  } = useAuth()
  return <UserContext.Provider value={{ user: username }} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('UseUser must be called within an UserProvider')
  }

  return context
}

export default UserProvider
