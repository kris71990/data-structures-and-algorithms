'use strict';

const findClosestValue = (bt, target) => {
  if (!bt || !bt.root) return null;

  let closestValueSoFar = bt.root.value;
  let currentNode = bt.root;

  while (currentNode !== null) {
    if (currentNode.value === target) {
      return currentNode.value;
    }

    const currentNodeDifference = Math.abs(target - currentNode.value);
    const closestElementDifference = Math.abs(target - closestValueSoFar);

    if (currentNodeDifference < closestElementDifference) {
      closestValueSoFar = currentNode.value;
    }

    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    } 
  }

  return closestValueSoFar;
};

export default findClosestValue;
