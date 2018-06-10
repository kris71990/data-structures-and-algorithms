'use strict';

import Node from './node-ll';

class LinkedList {
  constructor() {
    this.head = null;
  }

  length() {
    if (!this.head) return null;

    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return counter;
  }

  // Big 0 runtime - O(1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Big 0 runtime - O(n)
  insertAtEnd(value) {
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

  find(val) {
    if (!this.head) return null;

    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter += 1;
      if (currentNode.value === val) {
        return counter;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  // Big 0 runtime - O(n)
  pop() {
    if (!this.head) return null;
    let currentNode = this.head;
    let previous;
  
    while (currentNode.next) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    const popped = currentNode.value;
    
    if (!this.head.next) {
      this.head = null;
    } else {
      previous.next = null;
    }
    return popped;
  }

  // Big 0 runtime - O(n)
  remove(value) {
    let currentNode = this.head;
    if (this.head.value === value) {
      const temp = this.head.value;
      this.head = this.head.next;
      return temp;
    }

    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    return this;
  }

  // Big 0 runtime - O(n)
  reduce() {
    let currentNode = this.head;
    let sum = 0;

    while (currentNode.next) {
      sum += currentNode.value;
      currentNode = currentNode.next;
    }
    sum += currentNode.value;
    return sum;
  }
}

export default LinkedList;
