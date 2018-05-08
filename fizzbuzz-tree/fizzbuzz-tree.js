'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

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

const fizzBuzzTree = (rootNode) => {
  if (!rootNode) return undefined;

  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'fizzbuzz';
  } else if (rootNode.value % 3 === 0) {
    rootNode.value = 'fizz';
  } else if (rootNode.value % 5 === 0) {
    rootNode.value = 'buzz';
  }
  fizzBuzzTree(rootNode.left);
  fizzBuzzTree(rootNode.right);
  return tree;
};

fizzBuzzTree(tree.root);

export { Node, BinaryTree, fizzBuzzTree };
