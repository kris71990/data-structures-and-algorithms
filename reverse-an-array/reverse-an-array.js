'use strict';

// Iterate backwards through array and push values to empty array; return previously empty array
const reverse = (arr) => {
  if (!arr || arr.length === 0) return null;

  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
};

// Or this can all be accomplished the same way with map
const reverseMap = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((x, i) => arr[arr.length - 1 - i]);
};

export { reverse, reverseMap };
