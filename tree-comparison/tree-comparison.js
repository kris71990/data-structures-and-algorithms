'use strict';

const commonValues = (bt1, bt2) => {
  if (!bt1 || !bt2) return undefined;
  const arr = [];
  const hash = {};
  const node1 = bt1.root;
  const node2 = bt2.root;

  const traverse = (root) => {
    if (!root) return undefined;
    hash[root.value] = 1;
    traverse(root.left);
    traverse(root.right);
    return undefined;
  };
  traverse(node1);

  const traverse2 = (root) => {
    if (!root) return undefined;
    if (hash[root.value]) {
      arr.push(root.value);
    }
    traverse2(root.left);
    traverse2(root.right);
    return undefined;
  };
  traverse2(node2);

  return arr;
};

export default commonValues;
