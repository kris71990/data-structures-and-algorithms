'use strict';

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
    if (this.stack2.length === 0) {
      this.stack2.push(this.stack1[0]);
      return this;
    }
    this.stack2.reverse().push(value);
    return this;
  }

  dequeue() {
    if (this.stack2.length > 0) return this.stack2.reverse().pop().reverse();
    this.stack2.push(this.stack1[0]);
    this.stack2.pop();
    return this;
  }
}
const test = new Queue();
test.stack1 = [1, 2, 3, 4, 5];
test.stack2 = [];

console.log(test.enqueue('cat'));
