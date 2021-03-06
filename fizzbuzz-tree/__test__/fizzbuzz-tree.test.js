'use strict';

import Node from '../../data-structures/binary-tree/binary-tree-node';
import BinaryTree from '../../data-structures/binary-tree/binary-tree';
import fizzBuzzTree from '../fizzbuzz-tree';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const fifteen = new Node(15);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;
two.right = fifteen;

six.right = seven;

seven.left = eight;
seven.right = nine;

const fizzbuzz = fizzBuzzTree(tree.root);

describe('fizzbuzz binary tree', () => {
  test('% 3 = fizz; % 5 = buzz; %3, %5 = fizzbuzz', () => {
    expect(fizzbuzz.left.value).toEqual(2);
    expect(fizzbuzz.right.value).toEqual('fizz');
    expect(fizzbuzz.right.right.value).toEqual('buzz');
    expect(fizzbuzz.left.right.value).toEqual('fizzbuzz');
  });

  test('should return undefined if no tree', () => {
    expect(fizzBuzzTree(new BinaryTree().root)).toBeUndefined();
  });
});
