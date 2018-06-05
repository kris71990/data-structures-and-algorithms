'use strict';

const mergeSort = (arr) => {
  if (!arr) return null;
  if (arr.length > 1) {
    const middle = arr.length / 2;
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    mergeSort(leftHalf);
    mergeSort(rightHalf);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] < rightHalf[j]) {
        arr[k] = leftHalf[i];
        i += 1;
      } else {
        arr[k] = rightHalf[j];
        j += 1;
      }
      k += 1;
    }

    while (i < leftHalf.length) {
      arr[k] = leftHalf[i];
      i += 1;
      k += 1;
    }

    while (j < rightHalf.length) {
      arr[k] = rightHalf[j];
      j += 1;
      k += 1;
    }
  }
  return arr;
};

export default mergeSort;
