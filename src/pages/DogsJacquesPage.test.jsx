import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { DogsJacquesPage } from './DogsJacquesPage';

describe('DogsJacquesPage.jsx', () => {
  describe('<DogsJacquesPage>', () => {
    test('renders "Jacques" header text', () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <DogsJacquesPage />
        </MemoryRouter>
      );
      const headerElement = screen.getByText(/Jacques/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });
});
