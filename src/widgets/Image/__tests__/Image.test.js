import Image from '@/widgets/Image' // Adjust the path if necessary
import { render, screen } from '@testing-library/react'

describe('Image Component', () => {
  test('renders the image element', () => {
    render(<Image />)
    // Query by role to find the image element
    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument() // Check if the image is in the document
  })
})
