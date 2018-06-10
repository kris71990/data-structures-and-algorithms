'use strict';

import LinkedList from '../linked-list/linked-list';

class Stack {
  constructor() {
    this._storage = new LinkedList();
    this.top = null;
  }
  
  push(value) {
    this._storage.insertAtHead(value);
    this.top = value;
    return this;
  }

  pop() {
    if (!this._storage.head) return null;
    let temp = this.top;

    if (!this._storage.head.next) {
      temp = this._storage.head.value;
      this._storage.head = null;
      this.top = null;
    } else {
      this._storage.head = this._storage.head.next;
      this.top = this._storage.head.value;
    }
    return temp;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    if (!this.top) return true;
    return false;
  }
}

export default Stack;
