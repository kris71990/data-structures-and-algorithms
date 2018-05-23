'use strict';

const Queue = require('./queue');

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

function levelTraversal(root) {
  const queue = new Queue();
  let str = '';
  let currentNode = null;

  root.children.push('\n');
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();
    str += currentNode.value;

    for (let i = 0; i < currentNode.children.length; i++) {
      if (currentNode.children[i] instanceof KAryNode) {
        if (currentNode.children[i + 1] === '\n') {
          currentNode.children[i].children.push('\n');
        }
        queue.enqueue(currentNode.children[i]);
      } else {
        str += '\n';
      }
    }
  }
  return str;
}

export { KAryNode, KAryTree, levelTraversal };
