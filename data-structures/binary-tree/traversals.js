'use strict';

/* ---- Recursive and Iterative Traversals of a Binary Tree ----
--- Big O --- 
All traversals have a time complexity of O(n), where n is the number of nodes in the tree

All traversals have a space complexity of O(h). In a recursive traversal, h represents the number of calls on the call stack; in an iterative traversal, h represents the number of nodes on the stack. In both circumstances, h is the height of the tree.
*/

import Stack from '../stack/stack';

// Recursive Pre-Order Traversal (Root - Left - Right)
const preOrderRec = (root, arr = []) => {
  if (!root) return null;
  arr.push(root.value);
  preOrderRec(root.left, arr);
  preOrderRec(root.right, arr);
  return arr;
};

// Iterative Pre-Order Traversal
const preOrderIt = (root) => {
  if (!root) return null;

  const stack = new Stack();
  const vals = [];
  stack.push(root);

  while (!stack.isEmpty()) {
    const currNode = stack.pop();
    vals.push(currNode.value);
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  }
  return vals;
};

// Recursive In-Order Traversal (Left - Root- Right)
const inOrderRec = (root, arr = []) => {
  if (!root) return null;
  inOrderRec(root.left, arr);
  arr.push(root.value);
  inOrderRec(root.right, arr);
  return arr;
};

// Recursive Post-Order Traversal (Left - Right - Root)
const postOrderRec = (root, nums = []) => {
  if (!root) return null;
  postOrderRec(root.left, nums);
  postOrderRec(root.right, nums);
  nums.push(root.value);
  return nums;
};

// Iterative Post-Order Traversal
const postOrderIt = (root) => {
  if (!root) return null;

  let currNode = root;
  const stack = new Stack();
  const vals = [];

  do {
    while (currNode) {
      if (currNode.right) stack.push(currNode.right);
      stack.push(currNode);
      currNode = currNode.left;
    }
    currNode = stack.pop();
    if (currNode.right && currNode.right === stack.peek()) {
      stack.pop();
      stack.push(currNode);
      currNode = currNode.right;
    } else {
      vals.push(currNode.value);
      currNode = null;
    }
  } while (!stack.isEmpty());

  return vals;
};

export { 
  preOrderRec, 
  preOrderIt, 
  inOrderRec,
  postOrderRec, 
  postOrderIt,
};

