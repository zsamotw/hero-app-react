import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppInput from './AppInput'
,
const setup = error => {
  const utils = render(
    <AppInput
      id="input"
      label="input"
      name="input"
      error={error}
      placeholder="placeholder"
    />
  )
  const input = utils.getByLabelText('input')
  return {
    input,
    utils
  }
}

afterEach(cleanup)

it('should render input', async () => {
  const { input } = setup()
  expect(input).toBeInTheDocument()
})

it('should display value', async () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'value' } })
  expect(input.value).toBe('value')
})

it('should display value and clear value', async () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'value' } })
  expect(input.value).toBe('value')
  fireEvent.change(input, { target: { value: '' } })
  expect(input.value).toBe('')
})

it('should display error message', async () => {
  const { utils } = setup({ message: 'Error exists' })
  const error = utils.getByText('Error exists')
  expect(error).toBeInTheDocument()
})

it('should display placeholder', async () => {
  const { utils } = setup()
  const placeholder = utils.getByPlaceholderText('placeholder')
  expect(placeholder).toBeInTheDocument()
})
