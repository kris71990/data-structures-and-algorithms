'use strict';

const LinkedList = require('../kth-from-end');

describe('find kth from end of linked list', () => {
  test('should return node k nodes from end of list', () => {
    const test = new LinkedList();
    test.append(4);
    test.append(5);
    test.append(6);
    test.append(7);
    expect(test.kthFromEnd(1).value).toEqual(6);
    expect(test.kthFromEnd(2).value).toEqual(5);
    expect(test.kthFromEnd(0).value).toEqual(7);
  });

  test('if no values in list - should return null', () => {
    const test = new LinkedList();
    expect(test.kthFromEnd(5)).toBeNull();
  });

  test('if value is not found in list, should return null', () => {
    const test = new LinkedList();
    test.append(4);
    test.append(5);
    test.append(6);
    test.append(7);
    expect(test.kthFromEnd(7)).toBeNull();
    expect(test.kthFromEnd(2)).not.toBeNull();
  });
});
