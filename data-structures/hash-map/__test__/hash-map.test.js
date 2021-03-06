'use strict';

import HashMap from '../hash-map';
import LinkedList from '../../linked-list/linked-list';

describe('Hash Map tests', () => {
  test('newly instantiated Hash Map', () => {
    const map = new HashMap(100);
    expect(map._capacity).toEqual(100);
    expect(map._buckets).toHaveLength(100);

    const empty = new HashMap();
    expect(empty._capacity).toEqual(50);
    expect(empty._buckets).toHaveLength(50);
  });
  
  test('Hash Map methods', () => {
    const methods = Object.getOwnPropertyNames(HashMap.prototype);
    expect(methods).toHaveLength(5);
  });

  test('set(key, value) should generate hash and assign to map', () => {
    const map = new HashMap();
    map.set('1', 'testing1');
    map.set('2', 'testing2');
    map.set('3', 'testing3');
    map.set('4', 'testing4');
    expect(map._buckets[0]).toBeInstanceOf(LinkedList);

    const lists = map._buckets.filter(list => list instanceof LinkedList);
    expect(lists).toHaveLength(4);

    map.set('1', 'duplicate');
    expect(lists).toHaveLength(4);
  });

  test('get(key) finds object in map at hash (or reports collisions)', () => {
    const map = new HashMap();
    map.set('1', 'testing1');
    map.set('2', 'testing2');
    map.set('3', 'testing3');
    map.set('4', 'testing4');
    map.set('1', 'duplicate');

    expect(map.get('1')).toEqual('2 collisions at this hash');
    expect(map.get('2')).toEqual('testing2');
    expect(map.get('3')).toEqual('testing3');
    expect(map.get('4')).toEqual('testing4');
  });

  test('delete(key) when no collisions exist removes linked list from hash', () => {
    const map = new HashMap();
    map.set('1', 'testing1');
    map.set('2', 'testing2');
    map.set('3', 'testing3');
    map.set('4', 'testing4');

    map.delete('1');
    expect(map.get('1')).toBeUndefined();
    map.delete('2');
    expect(map.get('2')).toBeUndefined();

    const lists = map._buckets.filter(list => list instanceof LinkedList);
    expect(lists).toHaveLength(2);
  });

  test('delete(key) when collisions exist', () => {
    const map = new HashMap();
    map.set('1', 'testing1');
    map.set('2', 'testing2');
    map.set('3', 'testing3');
    map.set('3', 'jslfbjsf');
    map.set('4', 'testing4');
    map.set('4', 'ttttttt');

    const lists = map._buckets.filter(list => list instanceof LinkedList);
    expect(lists).toHaveLength(4);

    expect(map.get('4')).toEqual('2 collisions at this hash');
    map.delete('4');
    expect(map.get('4')).toBeUndefined();

    expect(map.get('3')).toEqual('2 collisions at this hash');
    map.delete('3');
    expect(map.get('3')).toBeUndefined();

    expect(lists).toHaveLength(4);
  });
});
