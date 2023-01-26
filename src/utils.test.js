import { shuffle } from './utils';

describe('utils.js', () => {
  describe('shuffle', () => {
    test('is exported as a function', () => {
      expect(typeof shuffle).toBe('function');
    });

    test('throws if passed parameter "array" of a type other than object (Array)', () => {
      expect(() => {
        shuffle(undefined);
      }).toThrow();

      expect(() => {
        shuffle(null);
      }).toThrow();

      expect(() => {
        shuffle(false);
      }).toThrow();

      expect(() => {
        shuffle(1);
      }).toThrow();
    });

    test('returns [] when passed []', () => {
      expect(shuffle([])).toStrictEqual([]);
    });

    test('returns ["a"] when passed ["a"]', () => {
      expect(shuffle(["a"])).toStrictEqual(["a"]);
    });
  });
});
