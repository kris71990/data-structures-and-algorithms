'use strict';

import Queue from '../data-structures/queue/queue';
import LinkedList from '../data-structures/linked-list/linked-list';

const findMatches = (tree, val) => {
  const { root } = tree;
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
  if (!list.head) return 'no matches';
  return list;
};

export default findMatches;
