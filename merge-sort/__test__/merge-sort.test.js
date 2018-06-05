'use strict';

import mergeSort from '../merge-sort';

const arr = [9, 34, 23, 6, 88, 34, 1, 43, 2, 3, 44, 5, 67, 35, 12, 4, 62, 54, 23, 8];

describe('Testing merge sort', () => {
  test('should sort array', () => {
    const result = mergeSort(arr);
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(20);
    expect(result[0]).toEqual(1);
    expect(result[3]).toEqual(4);
    expect(result[5]).toEqual(6);
    expect(result[6]).toEqual(8);
    expect(result[10]).toEqual(23);
    expect(result[14]).toEqual(43);
    expect(result[16]).toEqual(54);
    expect(result[18]).toEqual(67);
    expect(result[19]).toEqual(88);
  });

  test('should return an array of one if array of one', () => {
    expect(mergeSort([5])[0]).toEqual(5);
  });

  test('should return null for no array', () => {
    expect(mergeSort()).toBeNull();
  });
});
