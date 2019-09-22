import React from 'react'
import { cleanup, fireEvent, render, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ThemeProvider } from 'styled-components'
import defaultTheme from '../styles/defaultTheme'
import Login from '../components/Login'

afterEach(cleanup)

const renderWithTheme = ui =>
  render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>)

test('Sends credentials when submitting', async () => {
  const login = jest.fn().mockReturnValue(Promise.resolve({ user: 'test' }))
  const email = 'test@te.st'
  const password = '123456'
  const { getByTestId, getByLabelText, getByText } = renderWithTheme(
    <Login login={login} />
  )

  fireEvent.change(getByLabelText(/email/i), { target: { value: email } })
  fireEvent.change(getByLabelText(/password/i), { target: { value: password } })
  await wait(() => {
    fireEvent.submit(getByTestId('login-form'))
    expect(getByText(/login/i)).toBeDisabled()
  })

  expect(login).toHaveBeenCalledTimes(1)
  expect(login).toHaveBeenCalledWith({ email, password })
})

test('Shows error when using wrong credentials', async () => {
  const mockEmail = 'test@tes.t'
  const mockPassword = '123456'
  const login = jest.fn().mockImplementation(async ({ email, password }) => {
    if (email !== mockEmail || password !== mockPassword) {
      throw new Error('err')
    }
  })
  const { getByTestId, getByLabelText, getByText } = renderWithTheme(
    <Login login={login} />
  )

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: 'test@te.st' },
  })
  fireEvent.change(getByLabelText(/password/i), { target: { value: password } })
  await wait(() => {
    fireEvent.submit(getByTestId('login-form'))
  })

  // If the test fails make sure that `Notification` component has
  // the same timeout value as the animation duration shown below.
  await wait(() => {
    expect(getByText(/Check your email or password/i)).toHaveStyle(
      'animation: notification 4s linear'
    )
  })
})

test('Shows errors when providing invalid credentials', async () => {
  const login = jest.fn()
  const { getByText, getByLabelText, getByTestId } = renderWithTheme(
    <Login login={login} />
  )

  const emailInput = getByLabelText(/email/i)
  const passwordInput = getByLabelText(/password/i)
  const form = getByTestId('login-form')

  fireEvent.change(emailInput, { target: { value: '' } })
  fireEvent.change(passwordInput, { target: { value: 'a' } })
  await wait(() => {
    fireEvent.submit(form)
  })

  expect(getByText(/Password is too short/i))
  expect(getByText(/required/i))

  fireEvent.change(emailInput, { target: { value: 'asdf' } })
  fireEvent.change(passwordInput, { target: { value: '123456' } })
  await wait(() => {
    fireEvent.submit(form)
  })

  expect(getByText(/valid email/i))
})
