'use strict';

import Queue from '../data-structures/queue/queue';

function breadthTraversal(rootNode) {
  if (!rootNode) return null;
  
  const queue = new Queue();
  const traversedNodes = [];
  queue.enqueue(rootNode);

  while (!queue.isEmpty()) {
    const first = queue.dequeue();
    traversedNodes.push(first.value);
    if (first.left) queue.enqueue(first.left);
    if (first.right) queue.enqueue(first.right);
  }
  return traversedNodes;
}

export default breadthTraversal;
