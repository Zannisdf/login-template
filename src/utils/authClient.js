import apiClient from './apiClient'

const key = process.env.REACT_APP_USER_TOKEN

const handleUserResponse = ({ token, username: user }) => {
  localStorage.setItem(key, token)
  return user
}

const getUser = () => {
  const token = getToken()
  if (!token) {
    return Promise.resolve({ user: null })
  }
  return apiClient('me').catch(err => {
    logout()
    Promise.reject(err)
  })
}

const login = ({ email, password }) =>
  apiClient('auth/login', {
    body: { email, password },
  }).then(handleUserResponse)

const logout = () => {
  localStorage.removeItem(key)
  return Promise.resolve()
}

const getToken = () => localStorage.getItem(key)

export { login, logout, getUser, handleUserResponse }
