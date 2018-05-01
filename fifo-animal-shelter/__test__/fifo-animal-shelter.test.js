'use strict';

import AnimalShelter from '../fifo-animal-shelter';

class Dog {
  constructor() {
    this.type = 'dog';
  }
}


class Cat {
  constructor() {
    this.type = 'cat';
  }
}

let testShelter;

describe('Animal Shelter class', () => {
  test('enqueue should add objects to beginning of array (end of queue)', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue(new Dog());
    expect(animalShelter.queue[0].type).toEqual('dog');
    animalShelter.enqueue(new Cat());
    expect(animalShelter.queue[0].type).toEqual('cat');
    animalShelter.enqueue(new Dog());
    expect(animalShelter.queue[0].type).toEqual('dog');
    expect(animalShelter.queue[1].type).toEqual('cat');
    animalShelter.enqueue(new Cat());
    animalShelter.enqueue(new Dog());
    expect(animalShelter.queue[0].type).toEqual('dog');
    testShelter = animalShelter;
  });

  // [d, c, d, c]
  test('dequeue should remove from end of array (beginning of queue)', () => {
    testShelter.dequeue('dog');
    expect(testShelter.queue[testShelter.queue.length - 1].type).toEqual('cat');
    expect(testShelter.queue).toHaveLength(4);
    testShelter.dequeue('dog');
    expect(testShelter.queue[testShelter.queue.length - 1].type).toEqual('cat');
    testShelter.dequeue('dog');
    expect(testShelter.queue[0].type).toEqual('cat');
    expect(testShelter.queue).toHaveLength(2);
  });
});
