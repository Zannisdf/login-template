import React from 'react'

import { useUser } from '../../context/UserContext'

import AuthenticatedApp from '../AuthenticatedApp'
import UnauthenticatedApp from '../UnauthenticatedApp'

const App = () => {
  const { user } = useUser()

  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
}

export default App
