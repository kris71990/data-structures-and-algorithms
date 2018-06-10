'use strict';

const largestProduct = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let down;
      let right;
      const current = arr[i][j];
      if (arr[i + 1]) right = arr[i + 1][j];
      if (arr[j + 1]) down = arr[i][j + 1];
      if (right && right * current > sum) sum = right * current;
      if (down && down * current > sum) sum = down * current;
    }
  }
  return sum;
};

export default largestProduct;
