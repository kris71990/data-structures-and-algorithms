'use strict';

import LinkedList from '../linked-list';

describe('Linked List tests', () => {
  test('newly instantiated Linked List head should be null', () => {
    expect(new LinkedList().head).toBeNull();
  });

  test('LinkedList methods', () => {
    const methods = Object.getOwnPropertyNames(LinkedList.prototype);
    expect(methods).toHaveLength(10);
  });

  test('insertAtHead(val) should insert nodes to head of list', () => {
    const list = new LinkedList();
    expect(list.insertAtHead(1).head.value).toEqual(1);
    expect(list.head.next).toBeNull();

    expect(list.insertAtHead(2).head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
    expect(list.head.next.next).toBeNull();

    expect(list.insertAtHead(3).head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
    expect(list.head.next.next.next).toBeNull();
  });

  test('insertAtEnd(val) should append nodes to end of list', () => {
    const list = new LinkedList();
    expect(list.insertAtEnd(5).head.value).toEqual(5);
    expect(list.head.next).toBeNull();

    expect(list.insertAtEnd(4).head.value).toEqual(5);
    expect(list.head.next.value).toEqual(4);
    expect(list.head.next.next).toBeNull();

    expect(list.insertAtEnd(3).head.value).toEqual(5);
    expect(list.head.next.value).toEqual(4);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });

  test('pop() should remove and return last node in list', () => {
    const list = new LinkedList();

    for (let i = 0; i < 10; i++) {
      list.insertAtEnd(i);
    }

    expect(list.pop()).toEqual(9);
    expect(list.head.next.next.next.next.next.next.next.next.value).toEqual(8);
    expect(list.pop()).toEqual(8);
    expect(list.head.next.next.next.next.next.next.next.value).toEqual(7);
    expect(list.pop()).toEqual(7);
    expect(list.head.next.next.next.next.next.next.value).toEqual(6);
    expect(list.pop()).toEqual(6);
    expect(list.head.next.next.next.next.next.value).toEqual(5);
    expect(list.pop()).toEqual(5);
    expect(list.head.next.next.next.next.value).toEqual(4);
    expect(list.pop()).toEqual(4);
    expect(list.head.next.next.next.value).toEqual(3);
    expect(list.pop()).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.pop()).toEqual(2);
    expect(list.head.next.value).toEqual(1);
    expect(list.pop()).toEqual(1);
    expect(list.head.value).toEqual(0);
    expect(list.pop()).toEqual(0);

    expect(list.head).toBeNull();
    expect(list.pop()).toBeNull();
  });

  test('remove(val) should remove node from list', () => {
    const list = new LinkedList();

    for (let i = 0; i < 10; i++) {
      list.insertAtEnd(i);
    }

    expect(list.head.next.next.next.next.value).toEqual(4);
    list.remove(4);
    expect(list.head.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.value).toEqual(3);

    expect(list.head.next.next.next.next.next.next.next.value).toEqual(8);
    list.remove(8);
    expect(list.head.next.next.next.next.next.next.next.value).toEqual(9);
    expect(list.head.next.next.next.next.next.next.value).toEqual(7);

    expect(list.head.next.value).toEqual(1);
    list.remove(1);
    expect(list.head.next.value).toEqual(2);

    expect(list.head.value).toEqual(0);
    list.remove(0);
    expect(list.head.value).toEqual(2);
  });

  test('reduce() should return sum of values in list', () => {
    const list = new LinkedList();

    for (let i = 0; i < 10; i++) {
      list.insertAtEnd(i);
    }

    expect(list.reduce()).toEqual(45);
  });

  test('insertBefore(val, new) should insert \'new\' node before \'val\' node', () => {
    const list = new LinkedList();
    expect(list.insertBefore(5, 4).head.value).toEqual(4);
    list.pop();

    for (let i = 0; i < 10; i++) {
      list.insertAtEnd(i);
    }

    expect(list.head.next.next.next.value).toEqual(3);
    list.insertBefore(3, 50);
    expect(list.head.next.next.next.value).toEqual(50);
    expect(list.head.next.next.next.next.value).toEqual(3);
  });

  test('insertAfter(val, new) should insert \'new\' node before \'val\' node', () => {
    const list = new LinkedList();
    expect(list.insertAfter(34, 5).head.value).toEqual(5);
    list.pop();

    for (let i = 0; i < 10; i++) {
      list.insertAtEnd(i);
    }

    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(3);
    list.insertAfter(2, 500);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(500);
    expect(list.head.next.next.next.next.value).toEqual(3);
  });

  test('length() should return length of list', () => {
    const list = new LinkedList();

    for (let i = 0; i < 10; i++) {
      list.insertAtEnd(i);
    }

    expect(list.length()).toEqual(10);
    
    for (let i = 0; i < 4; i++) {
      list.pop();
    }

    expect(list.length()).toEqual(6);
  });

  test('find(val) should return index of first node with correct value', () => {
    const list = new LinkedList();
    expect(list.find(5)).toBeNull();

    for (let i = 0; i < 10; i++) {
      list.insertAtEnd(i);
    }

    expect(list.find(6)).toEqual(7);
    expect(list.find(0)).toEqual(1);
    expect(list.find(9)).toEqual(10);
    expect(list.find(3)).toEqual(4);
    expect(list.find(500)).toEqual(-1);
  });
});
