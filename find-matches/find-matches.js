'use strict';

const Queue = require('./queue');
const LinkedList = require('./linked-list');

module.exports = (root, val) => {
  const queue = new Queue();
  const list = new LinkedList();
  let currentNode = null;
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();
    if (currentNode.value === val) {
      list.insertAtHead(currentNode);
    }
    for (let i = 0; i < currentNode.children.length; i++) {
      queue.enqueue(currentNode.children[i]);
    }
  }
  return list;
};
