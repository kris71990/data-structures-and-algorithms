'use strict';

const shift = require('../shift-array');

describe('shift-array.js', () => {
  test('Should return array with value in middle', () => {
    expect(shift([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
    expect(shift([1, 2, 3, 4, 5], 8)).toEqual([1, 2, 8, 3, 4, 5]);
  });
});
