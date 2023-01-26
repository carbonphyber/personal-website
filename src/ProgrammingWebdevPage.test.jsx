import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { ProgrammingWebdevPage } from './ProgrammingWebdevPage';

describe('ProgrammingWebdevPage.jsx', () => {
  describe('<ProgrammingWebdevPage>', () => {
    test('renders "Programming Tools for Web Developers" header text', () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <ProgrammingWebdevPage />
        </MemoryRouter>
      );
      const headerElement = screen.getByText(/Programming Tools for Web Developers/i, { selector: 'h1' });
      expect(Array.isArray(headerElement) ? headerElement[0] : headerElement).toBeInTheDocument();
    });
  });
});
