'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  // O(n) time/space where n is the length of the queue
  enqueue(animal) {
    this.queue.unshift(animal);
    return this;
  }

  // O(n) time/space where n is length of queue
  dequeue(animal) {
    if (this.queue[this.queue.length - 1].type === animal) {
      this.queue.pop();
      return this;
    }
    for (let i = this.queue.length - 1; i >= 0; i--) {
      if (this.queue[i].type === animal) {
        this.queue.splice(i, 1);
        return this;
      }
    }
    return undefined;
  }
}

export default AnimalShelter;

