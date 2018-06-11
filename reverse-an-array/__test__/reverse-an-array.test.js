'use strict';

import { reverse, reverseMap } from '../reverse-an-array';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversed = reverse(arr);
const reversedMap = reverseMap(arr);

describe('Testing reverse method', () => {
  test('reverse() should reverse an array of numbers', () => {
    expect(reversed[0]).toEqual(9);
    expect(reversed[1]).toEqual(8);
    expect(reversed[2]).toEqual(7);
    expect(reversed[3]).toEqual(6);
    expect(reversed[4]).toEqual(5);
    expect(reversed[5]).toEqual(4);
    expect(reversed[6]).toEqual(3);
    expect(reversed[7]).toEqual(2);
    expect(reversed[8]).toEqual(1);
  });

  test('reverse() should return null if no array or array is empty', () => {
    expect(reverse()).toBeNull();
    expect(reverse([])).toBeNull();
  });

  test('reverseMap should reverse an array of numbers', () => {
    expect(reversedMap[0]).toEqual(9);
    expect(reversedMap[1]).toEqual(8);
    expect(reversedMap[2]).toEqual(7);
    expect(reversedMap[3]).toEqual(6);
    expect(reversedMap[4]).toEqual(5);
    expect(reversedMap[5]).toEqual(4);
    expect(reversedMap[6]).toEqual(3);
    expect(reversedMap[7]).toEqual(2);
    expect(reversedMap[8]).toEqual(1);
  });

  test('reverseMap() should return null if no array or array is empty', () => {
    expect(reverseMap()).toBeNull();
    expect(reverseMap([])).toBeNull();
  });
});
