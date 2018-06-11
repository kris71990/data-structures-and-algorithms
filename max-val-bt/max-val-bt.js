'use strict';

let highVal = -Infinity;

const maxValue = (root) => {
  if (!root) return null;

  if (root.value > highVal) {
    highVal = root.value;
  }
  
  maxValue(root.left);
  maxValue(root.right);
  return highVal;
};

export default maxValue;
