import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TextField from '../components/TextField'
import {
  defaultLabelStyles,
  labelAboveInputStyles,
} from '../components/TextField/TextField'

afterEach(cleanup)

const baseProps = {
  id: 'id',
  label: 'label',
  name: 'name',
}

test('Has the correct html attributes', () => {
  const props = {
    ...baseProps,
    isRequired: true,
    autofocus: true,
  }
  const { label, name, type } = props
  const { getByLabelText } = render(<TextField {...props} />)
  const labelReg = new RegExp(label)

  // Will fail the test if the element doesn't exists, hence testing
  // the `for` and `id` html attributes exist and match.
  const input = getByLabelText(labelReg)

  expect(input).toHaveAttribute('name', name)
  expect(input).toHaveAttribute('type', type)
  expect(input).toHaveAttribute('required')
})

test('Gets focus with autofocus prop', () => {
  const props = {
    autofocus: true,
    ...baseProps,
  }
  const { getByLabelText } = render(<TextField {...props} />)

  expect(getByLabelText(props.label)).toHaveFocus()
})

test('Label moves to top on focus or input', () => {
  const props = {
    ...baseProps,
  }
  const { label } = props
  const { getByText, getByLabelText } = render(<TextField {...props} />)
  const labelElement = getByText(label)
  const input = getByLabelText(label)

  expect(labelElement).toHaveStyle(defaultLabelStyles)
  input.focus()
  expect(labelElement).toHaveStyle(labelAboveInputStyles)
  input.blur()
  expect(labelElement).toHaveStyle(defaultLabelStyles)

  input.focus()
  input.value = 'value'
  input.blur()
  expect(labelElement).toHaveStyle(labelAboveInputStyles)
})

test('Label shows required field on required prop', () => {
  const props = {
    ...baseProps,
    isRequired: true,
  }
  const { label } = props
  const { getByText } = render(<TextField {...props} />)
  const labelReg = new RegExp(label)
  const requiredIcon = getByText('*')
  expect(getByText(labelReg)).toContainElement(requiredIcon)
})

test("Behaves as uncontrolled input when value and handlers aren't passed", () => {
  const props = {
    ...baseProps,
  }
  const value = 'Cats are cute'
  const { getByLabelText } = render(<TextField {...props} />)
  const input = getByLabelText(props.label)

  input.value = value

  expect(input.value).toEqual(value)
})

test('Behaves as controlled component when value and handler are passed', () => {
  const handleChange = jest.fn()
  const props = {
    ...baseProps,
    handleChange,
    value: '',
  }
  const { getByLabelText } = render(<TextField {...props} />)
  const input = getByLabelText(props.label)

  expect(input.value).toEqual(props.value)
  fireEvent.change(input, { target: { value: 'a' } })
  expect(input.value).toEqual(props.value)
})
