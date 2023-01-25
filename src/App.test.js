import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/David Wortham/i, { selector: 'h1' });
  expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
});
