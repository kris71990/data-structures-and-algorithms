'use strict';

import shift from '../shift-array';

describe('shift-array.js', () => {
  test('Odd length array should return value in middle', () => {
    expect(shift([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });

  test('Even length array should return value in middle in middle - 1', () => {
    expect(shift([1, 2, 3, 4, 5], 8)).toEqual([1, 2, 8, 3, 4, 5]);
  });

  test('Should return array with value in middle', () => {
    expect(shift([], 5)).toEqual([5]);
  });

  test('should return unchanged array if no second argument', () => {
    expect(shift([])).toBeInstanceOf(Array);
  });

  test('should return null if first argument is not an array', () => {
    expect(shift(1, 4)).toBeNull();
  });
});
