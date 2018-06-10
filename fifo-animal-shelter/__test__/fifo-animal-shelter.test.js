'use strict';

import AnimalShelter from '../fifo-animal-shelter';
import { Cat, Dog } from '../animals';

let testShelter;

describe('Animal Shelter class', () => {
  test('enqueue should add objects to beginning of array (end of queue)', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue(new Dog());
    expect(animalShelter.queue.storage.head.value).toBeInstanceOf(Dog);
    expect(animalShelter.queue.storage.head.value.type).toEqual('dog');

    animalShelter.enqueue(new Cat());
    expect(animalShelter.queue.storage.head.value).toBeInstanceOf(Cat);
    expect(animalShelter.queue.storage.head.value.type).toEqual('cat');

    animalShelter.enqueue(new Dog());
    expect(animalShelter.queue.storage.head.value).toBeInstanceOf(Dog);
    expect(animalShelter.queue.storage.head.value.type).toEqual('dog');
    expect(animalShelter.queue.storage.head.next.value).toBeInstanceOf(Cat);
    expect(animalShelter.queue.storage.head.next.value.type).toEqual('cat');

    animalShelter.enqueue(new Cat());
    animalShelter.enqueue(new Dog());
    expect(animalShelter.queue.storage.head.value).toBeInstanceOf(Dog);
    expect(animalShelter.queue.storage.head.value.type).toEqual('dog');
    testShelter = animalShelter;
  });

  test('dequeue should remove from beginning of queue', () => {
    expect(testShelter.queue.storage.head.next.next.next.value).toBeInstanceOf(Cat);
    expect(testShelter.queue.storage.head.next.next.next.next.value).toBeInstanceOf(Dog);
    testShelter.dequeue('dog');
    expect(testShelter.queue.storage.head.next.next.next.value).toBeInstanceOf(Cat);
    expect(testShelter.queue.storage.head.next.next.next.next).toBeNull();

    expect(testShelter.queue.storage.head.next.next.value).toBeInstanceOf(Dog);
    expect(testShelter.queue.storage.head.next.next.next.value).toBeInstanceOf(Cat);
    testShelter.dequeue('cat');
    expect(testShelter.queue.storage.head.next.next.value).toBeInstanceOf(Dog);
    expect(testShelter.queue.storage.head.next.next.next).toBeNull();
  });

  test('dequeue animal that is not at front of queue should find highest priority animal and remove from queue', () => {
    testShelter.enqueue(new Cat()); // d/c/d/c/d
    testShelter.enqueue(new Dog());

    console.log(testShelter.queue.storage.head);

    expect(testShelter.queue.storage.length()).toEqual(5);
    expect(testShelter.queue.storage.head.next.next.next.value).toBeInstanceOf(Cat);
    expect(testShelter.queue.storage.head.next.next.next.next.value).toBeInstanceOf(Dog);
    expect(testShelter.queue.storage.head.next.next.next.next.next).toBeNull();

    testShelter.dequeue('cat');
    expect(testShelter.queue.storage.length()).toEqual(4);
    expect(testShelter.queue.storage.head.next.next.next.value).toBeInstanceOf(Dog);
    expect(testShelter.queue.storage.head.next.next.next.next).toBeNull();

    expect(testShelter.queue.storage.head.next.value).toBeInstanceOf(Cat);
    testShelter.dequeue('cat');
    expect(testShelter.queue.storage.length()).toEqual(3);
    expect(testShelter.queue.storage.head.next.value).toBeInstanceOf(Dog);

    expect(testShelter.queue.storage.head.value).toBeInstanceOf(Dog);
    expect(testShelter.queue.storage.head.next.value).toBeInstanceOf(Dog);
    expect(testShelter.queue.storage.head.next.next.value).toBeInstanceOf(Dog);
  });
});
