'use strict';

const findWord = (str) => {
  if (!str) return undefined;
  const arr = str.split(' ');
  const map = {};
  map[arr[0]] = 1;

  for (let i = 1; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] = 2;
      return arr[i];
    } 
    map[arr[i]] = 1;  
  }
  return 'no repeated words';
};

export default findWord;
