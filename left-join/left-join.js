'use strict';

const leftJoin = (left, right) => {
  if (!left) return null;
  if (!right) return left;

  const obj = {};
  Object.keys(left).forEach((key) => {
    obj[key] = [left[key]];
    if (right[key]) {
      obj[key].push(right[key]);
    } else {
      obj[key].push(null);
    }
  });
  return obj;
};

export default leftJoin;
