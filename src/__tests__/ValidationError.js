import React from 'react'
import { cleanup, render } from '@testing-library/react'

import ValidationError from '../components/ValidationError'

afterEach(cleanup)

test('Renders a list of errors', () => {
  const firstErr = 'error 1'
  const secondErr = 'error 2'
  const errors = [firstErr, secondErr]
  const { getByText, getAllByText } = render(
    <ValidationError errors={errors} />
  )

  getByText(firstErr)
  getByText(secondErr)
  expect(getAllByText(/error/).length).toBe(errors.length)
})
