'use strict';

import LinkedList from '../ll_insertions';

describe('linked-list insertions', () => {
  test('Should add the given value at end of list', () => {
    const test = new LinkedList();
    test.append(4);
    expect(test.head.value).toEqual(4);
    test.append(5);
    expect(test.head.next.value).toEqual(5);
    test.append(6);
    expect(test.head.next.next.value).toEqual(6);
  });

  test('Should insert second argument value node before first argument value node', () => {
    const test = new LinkedList();
    test.append(4);
    test.append(5);
    test.insertBefore(5, 3);
    expect(test.head.next.value).toEqual(3);
    test.insertBefore(5, 2);
    expect(test.head.next.next.value).toEqual(2);
    test.insertBefore(2, 8);
    expect(test.head.next.next.value).toEqual(8);
  });

  test('Should insert second argument value node after first argument value node', () => {
    const test = new LinkedList();
    test.append(4);
    test.insertAfter(4, 3);
    expect(test.head.value).toEqual(4);
    test.insertAfter(3, 6);
    expect(test.head.next.next.value).toEqual(6);
    test.insertAfter(6, 8);
    expect(test.head.next.next.next.value).toEqual(8);
  });
});
