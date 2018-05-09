'use strict';

import Node from '../node';
import BinaryTree from '../binary-tree';
import breadthTraversal from '../breadth-traversal';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

describe('Breadth Traversal of Binary Tree', () => {
  test('traversal of tree', () => {
    const traversedNodes = breadthTraversal(tree.root);
    expect(traversedNodes).toBeInstanceOf(Array);
    expect(traversedNodes[1]).toEqual(2);
    expect(traversedNodes[3]).toEqual(6);
    expect(traversedNodes[6]).toEqual(7);
  });
});
