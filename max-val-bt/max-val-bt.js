'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let highVal = -Infinity;
function maxValue(root) {
  if (!root) return null;
  if (root.value > highVal) {
    highVal = root.value;
  }
  maxValue(root.left);
  maxValue(root.right);
  return highVal;
}

export { BinaryTree, Node, maxValue };
