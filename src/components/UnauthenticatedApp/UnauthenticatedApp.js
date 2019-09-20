import React from 'react'

import { useAuth } from '../../context/AuthContext'

import { Redirect, Route, Switch } from 'react-router-dom'
import Login from '../Login'

const UnauthenticatedApp = () => {
  const { login } = useAuth()
  return (
    <Switch>
      <Route exact path="/login" render={() => <Login login={login} />} />
      <Route render={props => <Redirect {...props} to="/login" />} />
    </Switch>
  )
}

export default UnauthenticatedApp
