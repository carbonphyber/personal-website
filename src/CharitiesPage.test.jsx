import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { CharitiesPage } from './CharitiesPage';

describe('CharitiesPage.jsx', () => {
  describe('<CharitiesPage>', () => {
    test('renders "David supports these charities." paragraph text', () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <CharitiesPage />
        </MemoryRouter>
      );
      const pElement = screen.getByText(/David supports these charities/i, { selector: 'p' });
      expect(Array.isArray(pElement) ? pElement[0] : pElement).toBeInTheDocument();
    });
  });
});
