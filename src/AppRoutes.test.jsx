import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { AppRoutes } from './AppRoutes';

describe('AppRoutes.jsx', () => {
  describe('<AppRoutes>', () => {
    test('renders "David Wortham" header text when the URL is "/"', () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <AppRoutes />
        </MemoryRouter>
      );
      const headerElement = screen.getByText(/David Wortham/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });

  describe('fallback page', () => {
    test('renders "404 Not Found" text when URL not matched to an existing page', () => {
      render(
        <MemoryRouter initialEntries={["/404"]}>
          <AppRoutes />
        </MemoryRouter>
      );
      const headerElement = screen.getByText(/404 Not Found/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });
});
