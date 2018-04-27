'use strict';

const LinkedList = require('../ll-merge');

describe('merge two linked lists', () => {
  test('should return list 1 with alternating nodes from list 2', () => {
    const test1 = LinkedList.LinkedList;
    const test2 = LinkedList.LinkedList;
    test1.append(4);
    test1.append(5);
    test1.append(6);
    test1.append(7);
    test2.append(8);
    test2.append(9);
    test2.append(10);
    test2.append(11);
    console.log(test1);
    console.log(test2);
    const merged = LinkedList.merge(test1, test2); // 4,8,5,9,6,10,7,11
    expect(merged.head.next.value).toEqual(8);
    expect(merged.head.next.next.value).toEqual(5);
    expect(merged.head.next.next.next.value).toEqual(9);
    expect(merged.head.next.next.next.next.value).toEqual(6);
  });
});
