import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Alert from './Alert'

const setup = () => {
  const utils = render(
    <Alert data-testid="alert">
      <div data-testid="content-container">Test content</div>
    </Alert>
  )
  const alert = utils.getByTestId('alert')
  const contentContainer = utils.getByTestId('content-container')
  return {
    alert,
    contentContainer
  }
}

afterEach(cleanup)

it('should render Alert', async () => {
  const { alert } = setup()
  expect(alert).toBeInTheDocument()
})

it('should render alert content', async () => {
  const { contentContainer } = setup()
  expect(contentContainer.textContent).toBe('Test content')
})
