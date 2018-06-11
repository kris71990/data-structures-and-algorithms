'use strict';

import Queue from '../queue/queue';
import Stack from '../stack/stack';

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time : O(n)
  // Space : O(w) -> O(n)
  breadthFirstTraversal() {
    if (!this.root) {
      return null;
    }
    const arr = [];
    return this._breadthFirstSearch(this.root, arr);
  }

  _breadthFirstSearch(root, arr) {
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      arr.push(currentNode.value);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    console.log(this);
    return arr;
  }

  find(value) {
    if (!this.root) return null;
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    const queue = new Queue();
    queue.enqueue(rootNode);
    let currentNode = rootNode;

    while (!queue.isEmpty()) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = queue.dequeue();
      for (let i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].value === value) {
          return currentNode.children[i];
        }
        queue.enqueue(currentNode.children[i]);
      }
    }
    console.log(this);
    return null;
  }

  toString() {
    if (!this.root) return null;
    return this._toString();
  }

  _toString() {
    let str = '';
    const queue = new Queue();
    queue.enqueue(this.root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      str += `${currentNode.value}\n`;

      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return str;
  }

  toArray() {
    if (!this.root) {
      return null;
    }
    return this._toArray(this.root);
  }
  
  _toArray(rootNode) { // time : O(n), space O(w) = O(n)
    const stack = new Stack();
    stack.push(rootNode);
    const array = [];
    let currentNode = null;

    while (!stack.isEmpty()) {
      currentNode = stack.pop();
      array.push(currentNode.value);
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }
    console.log(array);
    console.log(this);
    return array;   
  }
}

export default KaryTree;
