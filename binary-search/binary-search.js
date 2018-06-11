'use strict';

const binarySearch = (arr, val) => {
  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  while (arr[mid] !== val && start < stop) {
    if (val < arr[mid]) {
      stop = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + stop) / 2);
  }
  return (arr[mid] !== val) ? -1 : mid;
};

export default binarySearch;
