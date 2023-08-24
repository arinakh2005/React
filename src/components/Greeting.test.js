import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('should renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assertion
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
