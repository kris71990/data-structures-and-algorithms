'uses strict';

import leftJoin from '../left-join';

const map1 = { 
  fond: 'enamored', 
  wrath: 'anger', 
  outfit: 'garb', 
  yes: 'si', 
};

const map2 = { 
  fond: 'averse', 
  wrath: 'delight',
  outcast: 'blah',
};

const join = leftJoin(map1, map2);

describe('Left Join of hashes', () => {
  test('should return object of combined hashes', () => {
    expect(join).toBeInstanceOf(Object);
    expect(join.fond).toBeInstanceOf(Array);
    expect(Object.keys(join)).toHaveLength(4);
    expect(join.fond[1]).toEqual('averse');
    expect(join.yes[1]).toBeNull();
    expect(join.outcast).toBeFalsy();
  });

  test('if no right hash, return left hash', () => {
    expect(leftJoin(map1)).toEqual(map1);
  });

  test('if no left hash, return null', () => {
    expect(leftJoin()).toBeNull();
  });
});
