'use strict';

import Queue from '../queue/queue';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthTraversal() {
    const queue = new Queue();
    const traversedNodes = [];
    queue.enqueue(this.root);
  
    while (!queue.isEmpty()) {
      const first = queue.dequeue();
      traversedNodes.push(first.value);
      if (first.left) queue.enqueue(first.left);
      if (first.right) queue.enqueue(first.right);
    }
    return traversedNodes;
  }
}

export default BinaryTree;
