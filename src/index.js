import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import defaultTheme from './styles/defaultTheme'

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import AuthProvider from './context/AuthContext'
import GlobalStyle from './styles/GlobalStyle'
import UserProvider from './context/UserContext'

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <GlobalStyle />
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
