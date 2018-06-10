'use strict';

import Node from '../data-structures/linked-list/node-ll';

class LinkedList {
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

  insertBefore(value, newValue) {
    const node = new Node(newValue);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    let curr = currentNode.next;

    while (curr) {
      if (curr.value === value) {
        currentNode.next = node;
        node.next = curr;
        return this;
      }
    
      currentNode = curr;
      curr = curr.next;
    }
    return null;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        const temp = currentNode.next;
        currentNode.next = node;
        currentNode.next.next = temp;
        break;
      }
      currentNode = currentNode.next;
    }
    return this;
  }
}

export default LinkedList;
