/* eslint-env browser, jest */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { CodeSnippetCard } from './CodeSnippetCard';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('CodeSnippetCard.jsx', () => {
  describe('<CodeSnippetCard>', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });
    
    test('renders "# unit test" code text when passed text="# unit test"', () => {
      act(() => {
        render(
          <CodeSnippetCard
            text="# unit test"
          />
        );
      });
      const codeElement = screen.getByText(/# unit test/i, { selector: 'code' });
      expect(Array.isArray(codeElement) ? codeElement[0] : codeElement).toBeInTheDocument();
    });

    describe('copy to clipboard', () => {
      let container;
      const originalClipboard = { ...global.navigator.clipboard };

      beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        const mockClipboard = {
          writeText: jest.fn(),
        };
        global.navigator.clipboard = mockClipboard;
      });

      afterEach(() => {
        document.body.removeChild(container);
        container = null;
        jest.resetAllMocks();
        global.navigator.clipboard = originalClipboard;
      });

      test('renders "# unit test" code text when passed text="# unit test"', async () => {
        const codeText = '# unit test';
        act(() => {
          render(
            <CodeSnippetCard
              text={codeText}
            />
          );
        });
        // screen.debug();
        expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(0);

        const codeElement = screen.getByText(codeText, { selector: 'code' });
        fireEvent.click(codeElement);

        await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1))
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(codeText);
      });
    });
  });
});
