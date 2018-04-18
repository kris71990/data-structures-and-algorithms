'use strict';

module.exports = (arr, index) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) return i;
  }
  return -1;
};
