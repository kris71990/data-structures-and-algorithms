'use strict';

const search = require('../binary-search');

describe('binary-search.js', () => {
  test('Number in array should return index', () => {
    expect(search([1, 2, 3, 4, 5], 5)).toEqual(4);
  });
  test('Number in array should return -1', () => {
    expect(search([-1, -2, -3, -4, -5], -4)).toEqual(3);
  });
  test('Number not in array should return -1', () => {
    expect(search([1, 2, 3, 4, 5], 8)).toEqual(-1);
  });
  test('Empty array should return -1', () => {
    expect(search([], 5)).toEqual(-1);
  });
});
