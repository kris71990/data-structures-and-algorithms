'use strict';

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
    return this;
  }

  dequeue() {
    if (this.stack2.length === 0) {
      for (let i = this.stack1.length - 1; i >= 0; i--) {
        this.stack2.push(this.stack1[i]);
      }
    }
    this.stack2.pop();
    this.stack1.shift();
    return this;
  }
}

export default Queue;
