'use strict';

import { BinaryTree, Node, maxValue } from '../max-val-bt';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const fourteen = new Node(14);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = fourteen;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

describe('Binary Tree max value', () => {
  test('should return max value in tree', () => {
    expect(maxValue(tree.root)).toEqual(14);
    tree.root.left.value = 100;
    expect(maxValue(tree.root)).toEqual(100);
  });
});
