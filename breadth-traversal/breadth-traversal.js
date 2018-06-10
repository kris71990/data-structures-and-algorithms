'use strict';

import Queue from './queue';

function breadthTraversal(rootNode) {
  const queue = new Queue();
  const traversedNodes = [];
  queue.enqueue(rootNode);

  while (!queue.isEmpty()) {
    const first = queue.storage[queue.storage.length - 1];
    traversedNodes.push(first.value);
    queue.dequeue();
    if (first.left) queue.enqueue(first.left);
    if (first.right) queue.enqueue(first.right);
  }
  return traversedNodes;
}

export default breadthTraversal;
