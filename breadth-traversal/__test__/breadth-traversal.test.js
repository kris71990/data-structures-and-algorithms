'use strict';

import Node from '../../data-structures/binary-tree/binary-tree-node';
import BinaryTree from '../../data-structures/binary-tree/binary-tree';
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
    expect(traversedNodes[0]).toEqual(1);
    expect(traversedNodes[1]).toEqual(2);
    expect(traversedNodes[2]).toEqual(3);
    expect(traversedNodes[3]).toEqual(6);
    expect(traversedNodes[4]).toEqual(4);
    expect(traversedNodes[5]).toEqual(5);
    expect(traversedNodes[6]).toEqual(7);
    expect(traversedNodes[7]).toEqual(8);
    expect(traversedNodes[8]).toEqual(9);
  });

  test('no input tree returns null', () => {
    expect(breadthTraversal()).toBeNull();
  });
});
