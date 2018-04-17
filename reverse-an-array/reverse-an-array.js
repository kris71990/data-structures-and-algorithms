'use strict';

// Iterate backwards through array and push values to empty array; return previously empty array
function reverse(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Or this can all be accomplished the same way with map
function reverseMap(arr) {
  return arr.map((x, i) => arr[arr.length - 1 - i]);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
reverse(arr); // [9,8,7,6,5,4,3,2,1]
reverseMap(arr); // [9,8,7,6,5,4,3,2,1]
