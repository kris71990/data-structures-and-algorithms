'use strict';

import findWord from '../repeated-word';

const str = 'one two three four five six three seven nine one';
const str2 = 'one two three four five six seven eight nine';
const result = findWord(str);
const result2 = findWord(str2);

describe('test to find first repeated word', () => {
  test('should find first repeated word', () => {
    expect(result).toEqual('three');
  });

  test('should return \'no repeats\' if no repeats', () => {
    expect(result2).toEqual('no repeated words');
  });

  test('should return undefined if no string', () => {
    expect(findWord()).toBeUndefined();
  });
});
