'use strict';

const LinkedList = require('./linked-list');

module.exports = class Queue {
  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(value) {
    return this.storage.insertAtHead(value);
  }

  dequeue() {
    return this.storage.pop();
  }

  isEmpty() {
    if (!this.storage.head) return true;
    return false;
  }
};
