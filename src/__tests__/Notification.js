import React from 'react'
import { cleanup, render, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Notification from '../components/Notification'

afterEach(cleanup)

test('It remains hidden if there is no message', () => {
  const { getByTestId } = render(<Notification message={''} />)

  expect(getByTestId('notification')).not.toBeVisible()
})

test("It's visible when there's a message", async () => {
  const timeout = 5
  const message = 'Error'
  const { getByText } = render(
    <Notification message={message} timeout={timeout} />
  )

  await wait(() => {
    expect(getByText(message)).toHaveStyle(
      `animation: notification ${timeout}s linear`
    )
  })
})

test('It hides after timeout', async () => {
  const message = 'test'
  const timeout = 1
  const { getByText } = render(
    <Notification message={message} timeout={timeout} />
  )

  await wait(() => {
    expect(getByText(message)).not.toBeVisible()
  })
})
