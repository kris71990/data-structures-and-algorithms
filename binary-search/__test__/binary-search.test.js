'use strict';

import binarySearch from '../binary-search';

describe('binary-search.js', () => {
  test('Number in array should return index', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  });
  test('Number in array should return -1', () => {
    expect(binarySearch([-4, -3, -2, -1, 0], -4)).toEqual(0);
  });
  test('Number not in array should return -1', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 8)).toEqual(-1);
  });
  test('Empty array should return -1', () => {
    expect(binarySearch([], 5)).toEqual(-1);
  });
});
