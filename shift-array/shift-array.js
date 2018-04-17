'use strict';

// Iterate through first half and second half of array seperately
// push b to first and concat to second
module.exports = (a, b) => {
  const arr1 = [];
  const arr2 = [];
  const i = a.length / 2;
  for (let j = 0; j < i; j++) {
    arr1.push(a[j]);
  }
  for (let k = i; k < a.length; k++) {
    arr2.push(a[k]);
  }
  
  arr1.push(b);
  return arr1.concat(arr2);
};
