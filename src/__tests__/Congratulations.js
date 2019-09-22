import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import Congratulations from '../components/Congratulations'

afterEach(cleanup)

const baseTheme = {
  buttons: {
    primary: {
      bg: '#333',
      color: '#fff',
      hover: '#ccc',
      outline: '#999',
    },
  },
}

const renderWithThemeProvider = ui =>
  render(<ThemeProvider theme={baseTheme}>{ui}</ThemeProvider>)

const props = {
  name: 'User',
  logout: jest.fn(),
}

test('Renders the username', () => {
  const nameReg = new RegExp(props.name)
  const { getByText } = renderWithThemeProvider(<Congratulations {...props} />)
  expect(getByText(nameReg))
})

test('Button triggers callback', () => {
  const { logout } = props
  const { getByText } = renderWithThemeProvider(<Congratulations {...props} />)
  const signout = getByText(/sign out/i)

  fireEvent.click(signout)

  expect(logout).toHaveBeenCalledTimes(1)
})
