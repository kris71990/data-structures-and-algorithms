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

  preOrderTraversal() {
    const arr = [];
    return this._preOrderTraversal(this.root, arr);
  }

  _preOrderTraversal(root, arr) {
    if (!root) return undefined;
  
    arr.push(root.value);
    this._preOrderTraversal(root.left, arr);
    this._preOrderTraversal(root.right, arr);
    return arr;
  }

  postOrderTraversal() {
    const arr = [];
    return this._postOrderTraversal(this.root, arr);
  }

  _postOrderTraversal(root, arr) {
    if (!root) return undefined;

    this._preOrderTraversal(root.left, arr);
    this._preOrderTraversal(root.right, arr);
    arr.push(root.value);
    return arr;
  }

  inOrderTraversal() {
    const arr = [];
    return this._inOrderTraversal(this.root, arr);
  }

  _inOrderTraversal(root, arr) {
    if (!root) return undefined;

    this._inOrderTraversal(root.left, arr);
    arr.push(root.value);
    this._inOrderTraversal(root.right, arr);
    return arr;
  }
}

export default BinaryTree;
