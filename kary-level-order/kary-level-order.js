'use strict';

import Queue from '../data-structures/queue/queue';
import KAryNode from '../data-structures/kary-tree/kary-node';

const levelTraversal = (root) => {
  if (!root) return undefined;

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
};

export default levelTraversal;
