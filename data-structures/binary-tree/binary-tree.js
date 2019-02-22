'use strict';

import Node from './binary-tree-node';
import Queue from '../queue/queue';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirstTraversal() {
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

  insert(value) {
    const nodeToAdd = new Node(value);

    if (!this.root) {
      this.root = nodeToAdd;
      return this;
    }

    const queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      if (node.left) {
        queue.enqueue(node.left);
      } else {
        node.left = nodeToAdd;
        return this;
      }

      if (node.right) {
        queue.enqueue(node.right);
      } else {
        node.right = nodeToAdd;
        return this;
      }
    }
    return this;
  }

  // remove(value) {
   
  // }
}

export default BinaryTree;
