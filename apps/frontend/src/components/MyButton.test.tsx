import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyButton from './MyButton'

describe('MyButton', () => {
  it('renders with the given text', () => {
    render(<MyButton text="Click me" padding={10} disabled={false} />)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('applies the correct padding style', () => {
    render(<MyButton text="Padded" padding={20} disabled={false} />)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ padding: '20px' }) // React sets it as px by default
  })

  it('is disabled when the prop is true', () => {
    render(<MyButton text="Disabled" padding={5} disabled={true} />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is enabled when the prop is false', () => {
    render(<MyButton text="Enabled" padding={5} disabled={false} />)
    expect(screen.getByRole('button')).toBeEnabled()
  })
})
