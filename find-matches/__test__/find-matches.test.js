'use strict';

const findMatches = require('../find-matches');

class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}

class KAryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3); 
one.appendChild(3); 

one.children[1].appendChild(6); 
one.children[1].appendChild(6); 
one.children[1].appendChild(3);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

const list = findMatches(one, 3);

describe('should enter values into Linked List', () => {
  test('list should only include nodes of specified values', () => {
    expect(list.head.value.value).toEqual(3);
    expect(list.head.next.value.value).toEqual(3);
    expect(list.head.next.next.value.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });
});
