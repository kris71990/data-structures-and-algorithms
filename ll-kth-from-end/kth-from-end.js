'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    if (!this.head) return null;
    let currentNode = this.head;
    let counterNode = this.head;
    let length = 0;
    
    while (currentNode) {
      currentNode = currentNode.next;
      length += 1;
    }
    if (k > length) return null; 

    for (let i = 0; i < length - k - 1; i++) {
      counterNode = counterNode.next;
    }
    return counterNode;
  }
};
