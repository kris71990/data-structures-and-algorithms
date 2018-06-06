'use strict';

const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot];
  let partitionIndex = left;
  
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      const temp = arr[i];
      arr[i] = arr[partitionIndex];
      arr[partitionIndex] = temp;
      partitionIndex += 1;
    }
  }
  const temp = arr[right];
  arr[right] = arr[partitionIndex];
  arr[partitionIndex] = temp;
  return partitionIndex;
};

const sorter = (arr, left, right) => {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
   
    sorter(arr, left, partitionIndex - 1);
    sorter(arr, partitionIndex + 1, right);
  }
};

const quickSort = (arr) => {
  if (!arr) return null;
  sorter(arr, 0, arr.length - 1);
  return arr;
};

export default quickSort;
