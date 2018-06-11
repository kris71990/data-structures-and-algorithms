'use strict';

const fizzBuzzTree = (rootNode) => {
  if (!rootNode) return undefined;

  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'fizzbuzz';
  } else if (rootNode.value % 3 === 0) {
    rootNode.value = 'fizz';
  } else if (rootNode.value % 5 === 0) {
    rootNode.value = 'buzz';
  }
  fizzBuzzTree(rootNode.left);
  fizzBuzzTree(rootNode.right);
  return rootNode;
};

export default fizzBuzzTree;
