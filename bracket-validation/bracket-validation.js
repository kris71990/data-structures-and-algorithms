'use strict';

import Stack from './stack';

const bracketValidation = (string) => {
  const stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '[' || string[i] === '(') {
      stack.push(string[i]);
    }
    if (string[i] === '}' && stack.top === '{') {
      stack.pop();
    }
    if (string[i] === ')' && stack.top === '(') {
      stack.pop();
    }
    if (string[i] === ']' && stack.top === '[') {
      stack.pop();
    }
  }
  if (stack.isEmpty() === true) return true;
  return false;
};

export default bracketValidation;
