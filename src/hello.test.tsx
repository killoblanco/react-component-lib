import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, it, afterEach } from 'vitest'
import { Greetings } from './greetings'

describe('Greetings Component', () => {
  afterEach(cleanup)

  it('Should render without name', () => {
    render(<Greetings />)
    expect(screen.getByText('Hello World!')).toBeTruthy()
  })

  it('Should render with name', () => {
    render(<Greetings name="Jhon" />)
    expect(screen.getByText('Hello Jhon!')).toBeTruthy()
  })
})
