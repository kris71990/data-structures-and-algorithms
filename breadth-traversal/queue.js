'use strict';

export default class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    this.storage.unshift(value);
    return this;
  }

  dequeue() {
    this.storage.pop();
    return this;
  }

  isEmpty() {
    if (this.storage.length > 0) return false;
    return true;
  }
}
