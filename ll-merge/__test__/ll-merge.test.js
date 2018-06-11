'use strict';

import LinkedList from '../../data-structures/linked-list/linked-list';
import mergeLists from '../ll-merge';

const test1 = new LinkedList();
const test2 = new LinkedList();
test1.insertAtEnd(4);
test1.insertAtEnd(5);
test1.insertAtEnd(6);
test1.insertAtEnd(7);
test2.insertAtEnd(8);
test2.insertAtEnd(9);
test2.insertAtEnd(10);
test2.insertAtEnd(11);

// 4,8,5,9,6,10,7,11
const merged = mergeLists(test1, test2);

describe('merge two linked lists', () => {
  test('merged list should be instance of linked list', () => {
    expect(merged).toBeInstanceOf(LinkedList);
  });

  test('should return list 1 with alternating nodes from list 2', () => {
    expect(merged.head.value).toEqual(4);
    expect(merged.head.next.value).toEqual(8);
    expect(merged.head.next.next.value).toEqual(5);
  });

  test('should return one list if only one list', () => {
    const empty = new LinkedList();
    const list = new LinkedList();

    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    list.insertAtEnd(4);

    const test = mergeLists(list, empty);

    expect(test.head.value).toEqual(1);
    expect(test.head.next.value).toEqual(2);
    expect(test.head.next.next.value).toEqual(3);
  });

  test('should return undefined if no list', () => {
    const empty = new LinkedList();
    const empty2 = new LinkedList();

    expect(mergeLists(empty, empty2)).toBeUndefined();
  });
});
