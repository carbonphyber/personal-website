import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { DogsRescueFostersPage } from './DogsRescueFostersPage';

describe('DogsRescueFostersPage.jsx', () => {
  describe('<DogsRescueFostersPage>', () => {
    test('renders "Rescue Dog Foster" header text', () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <DogsRescueFostersPage />
        </MemoryRouter>
      );
      const headerElement = screen.getByText(/Rescue Dog Foster/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });
});
