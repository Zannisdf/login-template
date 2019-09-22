import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Notification from '../components/Notification'

afterEach(cleanup)

test('It remains hidden if there is no message', () => {
  const { getByTestId } = render(<Notification message={''} />)

  expect(getByTestId('notification')).not.toBeVisible()
})

test("It's visible when there's a message", () => {
  const timeout = 5
  const message = 'Error'
  const { getByText } = render(
    <Notification message={message} timeout={timeout} />
  )

  setTimeout(() => {
    expect(getByText(message)).toBeVisible()
  }, 200)
})

test('It hides after timeout', () => {
  const message = 'test'
  const timeout = 1
  const { getByText } = render(
    <Notification message={message} timeout={timeout} />
  )

  setTimeout(() => {
    expect(getByText(message)).not.toBeVisible()
  }, timeout * 1000)
})
