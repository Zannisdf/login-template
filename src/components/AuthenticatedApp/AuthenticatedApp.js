import React from 'react'

import { useAuth } from '../../context/AuthContext'
import { useUser } from '../../context/UserContext'

import { Redirect, Route, Switch } from 'react-router-dom'
import Congratulations from '../Congratulations'

const AuthenticatedApp = () => {
  const { logout } = useAuth()
  const { user } = useUser()

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <Congratulations {...props} logout={logout} name={user} />
        )}
      />
      <Route
        exact
        path="/login"
        render={props => <Redirect {...props} to="/" />}
      />
    </Switch>
  )
}
export default AuthenticatedApp
