import { render, screen } from '@testing-library/react';
import App, { ResourcesPage } from './App';

describe('App.js', () => {
  describe('<App>', () => {
    test('renders header text', () => {
      render(<App />);
      const headerElement = screen.getByText(/David Wortham/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });

  describe('<Resources>', () => {
      test('renders Resources header text', () => {
      render(<ResourcesPage />);
      const headerElement = screen.getByText(/Resources/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });
});
