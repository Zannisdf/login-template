import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '../components/Button'

afterEach(cleanup)

const renderWithThemeProvider = (ui, theme) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

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
const { bg, color } = baseTheme.buttons.primary

test('Uses the correct label', () => {
  const label = 'Test'
  const { getByText } = renderWithThemeProvider(
    <Button>{label}</Button>,
    baseTheme
  )
  getByText(label)
})

test('Applies the variant styles', () => {
  const label = 'Test'
  const { getByText } = renderWithThemeProvider(
    <Button variant="primary">{label}</Button>,
    baseTheme
  )
  const button = getByText(label)

  expect(button).toHaveStyle(`color: ${color}`)
  expect(button).toHaveStyle(`background-color: ${bg}`)
})

test('Defaults to primary when a non existant variant is passed', () => {
  const label = 'Test'
  const { getByText } = renderWithThemeProvider(
    <Button variant="Cats">{label}</Button>,
    baseTheme
  )
  const button = getByText(label)

  expect(button).toHaveStyle(`color: ${color}`)
  expect(button).toHaveStyle(`background-color: ${bg}`)
})

test('Forwards the onClick handler', () => {
  const handleClick = jest.fn()
  const label = 'Click'
  const { getByText } = renderWithThemeProvider(
    <Button onClick={handleClick}>{label}</Button>,
    baseTheme
  )

  fireEvent.click(getByText(label))

  expect(handleClick).toHaveBeenCalledTimes(1)
})
