'use strict';

import Queue from '../queue';

const loadQueue = () => {
  const queue = new Queue();

  for (let i = 0; i < 5; i++) {
    queue.enqueue(i);
  }
  return queue;
};

describe('Queue tests', () => {
  test('newly instantiated Queue head should be null', () => {
    expect(new Queue().storage.head).toBeNull();
  });

  test('Queue methods', () => {
    const methods = Object.getOwnPropertyNames(Queue.prototype);
    expect(methods).toHaveLength(5);
  });

  test('enqueue(val) inserts node into queue', () => {
    const queue = new Queue();
    queue.enqueue(2);
    expect(queue.storage.head.value).toEqual(2);
    queue.enqueue(4);
    expect(queue.storage.head.value).toEqual(4);
    expect(queue.storage.head.next.value).toEqual(2);
    queue.enqueue(6);
    expect(queue.storage.head.value).toEqual(6);
    expect(queue.storage.head.next.next.value).toEqual(2);
  });

  test('dequeue() removes first node in queue', () => {
    const queue = loadQueue();

    for (let i = 0; i < 5; i++) {
      expect(queue.dequeue()).toEqual(i);
    }

    expect(queue.dequeue()).toBeNull();
  });

  test('peek() returns first item in queue', () => {
    const queue = loadQueue();

    expect(queue.peek()).toEqual(0);
    queue.dequeue();
    expect(queue.peek()).toEqual(1);
    queue.dequeue();
    expect(queue.peek()).toEqual(2);
    queue.dequeue();
    expect(queue.peek()).toEqual(3);
    queue.dequeue();
    expect(queue.peek()).toEqual(4);
    queue.dequeue();
    expect(queue.peek()).toBeNull();
  });

  test('isEmpty()', () => {
    const queue = loadQueue();
    expect(queue.isEmpty()).toEqual(false);

    const empty = new Queue();
    expect(empty.isEmpty()).toEqual(true);
  });
});
