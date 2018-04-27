'use strict';

// const foo = module.exports = {};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
}

function merge(list1, list2) {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  
  let counter = 0;
  while (currentNode2) {
    const nextNode1 = currentNode1.next;
    const nextNode2 = currentNode2.next;
    if (counter % 2 === 1) {
      currentNode1.next = nextNode1;
    } else {
      currentNode1.next = nextNode2;
    }
    counter += 1;
    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }
  return list1;
}

const test1 = new LinkedList();
const test2 = new LinkedList();
test1.append(2);
test1.append(5);
test1.append(6);
// test1.append(7);
test2.append(8);
test2.append(9);
test2.append(10);
// test2.append(11);
// console.log(test1.head.next);
// console.log(test2.head.next);
const bar = merge(test1, test2);
console.log(bar);

