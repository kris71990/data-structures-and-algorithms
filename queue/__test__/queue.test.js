'use strict';

import Queue from '../queue';

describe('Use two stacks to make a queue', () => {
  test('enqueue method should insert values into stack A', () => {
    const queue = new Queue();
    queue.stack1 = [1, 2, 3, 4, 5];
    queue.stack2 = [6, 7, 8, 9, 10];
    queue.enqueue(2);
    expect(queue.stack1[queue.stack1.length - 1]).toEqual(2);
    queue.enqueue(7);
    expect(queue.stack1[queue.stack1.length - 1]).toEqual(7);
    queue.enqueue(9);
    expect(queue.stack1[queue.stack1.length - 1]).toEqual(9);
  });
  test('dequeue method should pop values from stack B', () => {
    const queue = new Queue();
    queue.stack1 = [1, 2, 3, 4, 5];
    queue.stack2 = [6, 7, 8, 9, 10];
    queue.dequeue();
    expect(queue.stack2[queue.stack2.length - 1]).toEqual(9);
    queue.dequeue();
    expect(queue.stack2[queue.stack2.length - 1]).toEqual(8);
    queue.dequeue();
    expect(queue.stack2[queue.stack2.length - 1]).toEqual(7);
  });
  test('if dequeue stack (B) is empty, add/remove from enqueue stack (A)', () => {
    const queue = new Queue();
    queue.stack1 = [1, 2, 3, 4, 5];
    queue.stack2 = [];
    queue.dequeue(); 
    // stack2 becomes [5, 4, 3, 2]; stack1 becomes [2, 3, 4, 5]
    expect(queue.stack2[queue.stack2.length - 1]).toEqual(2);
    queue.dequeue();
    expect(queue.stack2[queue.stack2.length - 1]).toEqual(3);
    queue.dequeue();
    expect(queue.stack2[queue.stack2.length - 1]).toEqual(4);
  });
});
