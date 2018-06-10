'use strict';

import largestProduct from '../largest-product-array';

describe('largest-product-array.js', () => {
  test('2D array should return highest possible sum of two adjacent numbers', () => {
    expect(largestProduct([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(72);
    expect(largestProduct([[100, 200, 300], [400, 500, 122], [1, 2, 3]])).toEqual(200000);
  });
  test('2D array of all zeros should return 0', () => {
    expect(largestProduct([0, 0], [0, 0], [0, 0])).toEqual(0);
  });
  test('No input should return 0', () => {
    expect(largestProduct([])).toEqual(0);
  });
});
