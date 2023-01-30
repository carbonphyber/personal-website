/* eslint-env browser, jest */
import { act } from 'react-dom/test-utils';

import { scrollIntoViewOfLinkAnchor } from './domUtils';

describe('domUtils.js', () => {
  describe('scrollIntoViewOfLinkAnchor', () => {
    test('is exported as a function', () => {
      expect(typeof scrollIntoViewOfLinkAnchor).toBe('function');
    });

    test('throws if called without a Dom MouseEvent as the first parameter', () => {
      expect(() => {
        scrollIntoViewOfLinkAnchor();
      }).toThrow();

      expect(() => {
        scrollIntoViewOfLinkAnchor(new Event('foo', {
          bubbles: true,
          cancelable: true,
        }));
      }).toThrow();

      expect(() => {
        scrollIntoViewOfLinkAnchor(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }));
      }).not.toThrow();
    });

    describe('', () => {
      const parentId = 'theParent'
      const linkId = 'theLink'
      const targetId = 'theTarget';

      beforeEach(() => {
        act(() => {
          const parentDiv = document.createElement('div');
          parentDiv.id = parentId;
          const theLink = document.createElement('a');
          theLink.id = linkId;
          parentDiv.appendChild(theLink);
          for (let i = 0; i < 1000; i += 1) {
            parentDiv.appendChild(document.createElement('br'));
          }
          const theTarget = document.createElement('p');
          theTarget.id = targetId;
          parentDiv.appendChild(theTarget);
          document.body.appendChild(parentDiv);
        });
      });

      test('throws if called without a DOM MouseEvent as the first parameter', () => {
        expect(() => {
          const scrollIntoViewSpy = jest.fn();
          const linkEl = document.getElementById('linkId');
          const targetEl = document.getElementById('targetId');

          expect(scrollIntoViewSpy).toHaveBeenCalledTimes(0);

          act(() => {
            scrollIntoViewOfLinkAnchor(new MouseEvent('click', {
              target: linkEl,
              pointerX: 0,
              pointerY: 0,
              button: 0,
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              metaKey: false,
              bubbles: true,
              cancelable: true,
            }));
          });

          expect(scrollIntoViewSpy).toHaveBeenCalledTimes(1);
        });
      });

      afterEach(() => {
        const parentEl = document.getElementById(parentId);
        while (parentEl.firstChild) {
          parentEl.removeChild(parentEl.firstChild);
        }
        parentEl.parentNode.removeChild(parentEl);
      });
    });
  });
});
