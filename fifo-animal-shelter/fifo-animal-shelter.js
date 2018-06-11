'use strict';

import Queue from '../data-structures/queue/queue';

class AnimalShelter {
  constructor() {
    this.queue = new Queue();
  }

  // O(n) time/space where n is the length of the queue
  enqueue(animal) {
    this.queue.enqueue(animal);
    return this;
  }

  // O(n) time/space where n is length of queue
  dequeue(animal) {
    if (this.queue.peek().type === animal) {
      this.queue.dequeue();
      return this;
    } 
    
    const animalsArr = [];
    let currentNode = this.queue.storage.head;
    while (currentNode) {
      animalsArr.push(currentNode.value.type);
      currentNode = currentNode.next;
    }

    let counter = 0;
    for (let i = animalsArr.length - 1; i >= 0; i--) {
      if (animalsArr[i] === animal) {
        break;
      }
      counter += 1;
    }

    currentNode = this.queue.storage.head;
    let runner = this.queue.storage.head;
    let counter2 = 0;

    while (currentNode) {
      if (counter2 === animalsArr.length - counter - 1) {
        const temp = currentNode.next;
        currentNode = null;
        runner.next = temp;
        return this;
      }
      currentNode = currentNode.next;
      if (counter2 > 0) runner = runner.next;
      counter2 += 1;
    }
    return this;
  }
}

export default AnimalShelter;

