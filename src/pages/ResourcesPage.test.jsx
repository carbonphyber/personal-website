import { render, screen } from '@testing-library/react';
import { ResourcesPage } from './ResourcesPage';

describe('ResourcesPage.jsx', () => {
  describe('<ResourcesPage>', () => {
      test('renders Resources header text', () => {
      render(<ResourcesPage />);
      const headerElement = screen.getByText(/Resources/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });
});
