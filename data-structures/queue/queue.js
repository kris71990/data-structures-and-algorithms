'use strict';

import LinkedList from '../linked-list/linked-list';

class Queue {
  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(value) {
    return this.storage.insertAtHead(value);
  }

  dequeue() {
    return this.storage.pop();
  }

  peek() {
    if (!this.storage.head) {
      return null;
    }

    let currentNode = this.storage.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  isEmpty() {
    if (!this.storage.head) return true;
    return false;
  }
}

export default Queue;
