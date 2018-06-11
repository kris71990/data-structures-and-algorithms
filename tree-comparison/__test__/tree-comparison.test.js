'use strict';

import Node from '../../data-structures/binary-tree/binary-tree-node';
import BinaryTree from '../../data-structures/binary-tree/binary-tree';
import commonValues from '../tree-comparison';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const one2 = new Node(1);
const six2 = new Node(6);
const eight2 = new Node(8);
const ten2 = new Node(10);
const teen2 = new Node(24);
const nine2 = new Node(9);
const threen2 = new Node(34);
const three2 = new Node(3);

const eighty = new Node(80);
const ninety = new Node(90);
const forty = new Node(40);


const tree1 = new BinaryTree(one);
const tree2 = new BinaryTree(one2);
const tree3 = new BinaryTree(eighty);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;
four.left = eight;
four.right = nine;

one2.left = six2;
one2.right = eight2;
six2.left = ten2;
six2.right = teen2;
eight2.left = nine2;
eight2.right = threen2;
ten2.left = three2;

eighty.left = ninety;
eighty.right = forty;

const result = commonValues(tree1, tree2);

describe('testing finding common values', () => {
  test('should return common values', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(6);
    expect(result[2]).toEqual(3);
    expect(result[3]).toEqual(8);
    expect(result[4]).toEqual(9);
  });

  test('should return undefined if missing tree', () => {
    expect(commonValues(tree1)).toBeUndefined();
  });

  test('should return empty array if no matches', () => {
    expect(commonValues(tree1, tree3)).toHaveLength(0);
  });
});
