'use strict';

import Stack from '../stack';

const loadStack = () => {
  const stack = new Stack();

  for (let i = 0; i < 5; i++) {
    stack.push(i);
  }

  return stack;
};

describe('Stack tests', () => {
  test('newly instantiated Stack head should be null', () => {
    expect(new Stack()._storage.head).toBeNull();
  });

  test('Stack methods', () => {
    const methods = Object.getOwnPropertyNames(Stack.prototype);
    expect(methods).toHaveLength(5);
  });

  test('push(val) pushes a node to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack._storage.head.value).toEqual(1);
    expect(stack.top).toEqual(1);

    stack.push(2);
    expect(stack._storage.head.value).toEqual(2);
    expect(stack.top).toEqual(2);

    stack.push(3);
    expect(stack._storage.head.value).toEqual(3);
    expect(stack.top).toEqual(3);
  });

  test('pop() pops off node at top of stack', () => {
    const test = loadStack();

    for (let i = 4; i > 0; i--) {
      expect(test.pop()).toEqual(i);
      expect(test.top).toEqual(i - 1);
    }

    expect(test.pop()).toEqual(0);
    expect(test.top).toBeNull();
    expect(test.pop()).toBeNull();
  });

  test('peek() returns node at tome of stack', () => {
    const test = loadStack();

    for (let i = 4; i > 0; i--) {
      expect(test.peek()).toEqual(i);
      test.pop();
      expect(test.top).toEqual(i - 1);
    }

    expect(test.peek()).toEqual(0);
  });

  test('isEmpty() returns true or false if stack is empty or not', () => {
    const stack = loadStack();
    expect(stack.isEmpty()).toEqual(false);

    const empty = new Stack();
    expect(empty.isEmpty()).toEqual(true);
  });
});
