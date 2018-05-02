'use strict';

class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }
  
  push(value) {
    this.storage.push(value);
    this.top = value;
    return this;
  }

  pop() {
    this.storage.pop();
    this.top = this.storage[this.storage.length - 1];
    return this;
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
