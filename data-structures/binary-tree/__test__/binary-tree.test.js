'use strict';

import BinaryTree from '../binary-tree';
import Node from '../binary-tree-node';
import { 
  preOrderIt, 
  preOrderRec,
  inOrderRec,
  postOrderIt, 
  postOrderRec,
} from '../traversals';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const ten = new Node(10);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = ten;
three.right = six;
six.left = seven;
seven.left = eight;
seven.right = nine;

const tree = new BinaryTree(one);

describe('Binary Tree tests', () => {
  test('newly instantiated Binary Tree root should be null', () => {
    expect(new BinaryTree().root).toBeNull();
  });
  
  test('Binary Tree methods', () => {
    const methods = Object.getOwnPropertyNames(BinaryTree.prototype);
    expect(methods).toHaveLength(4);
  });

  test('breadthTraversal should traverse tree by level using a queue', () => {
    const breadth = tree.breadthTraversal();
    expect(breadth).toBeInstanceOf(Array);
    expect(breadth[0]).toEqual(1);
    expect(breadth[1]).toEqual(2);
    expect(breadth[2]).toEqual(3);
    expect(breadth[3]).toEqual(4);
    expect(breadth[4]).toEqual(5);
    expect(breadth[5]).toEqual(10);
    expect(breadth[6]).toEqual(6);
    expect(breadth[7]).toEqual(7);
    expect(breadth[8]).toEqual(8);
    expect(breadth[9]).toEqual(9);
  });

  test('preOrderRec should recursively traverse in root-left-right order', () => {
    const pre = preOrderRec(tree.root);
    expect(pre).toBeInstanceOf(Array);
    expect(pre[0]).toEqual(1);
    expect(pre[1]).toEqual(2);
    expect(pre[2]).toEqual(4);
    expect(pre[3]).toEqual(5);
    expect(pre[4]).toEqual(3);
    expect(pre[5]).toEqual(10);
    expect(pre[6]).toEqual(6);
    expect(pre[7]).toEqual(7);
    expect(pre[8]).toEqual(8);
    expect(pre[9]).toEqual(9);
  });

  test('preOrderIt (no recursion) should traverse in root-left-right order using a stack', () => {
    const pre = preOrderIt(tree.root);
    expect(pre).toBeInstanceOf(Array);
    expect(pre[0]).toEqual(1);
    expect(pre[1]).toEqual(2);
    expect(pre[2]).toEqual(4);
    expect(pre[3]).toEqual(5);
    expect(pre[4]).toEqual(3);
    expect(pre[5]).toEqual(10);
    expect(pre[6]).toEqual(6);
    expect(pre[7]).toEqual(7);
    expect(pre[8]).toEqual(8);
    expect(pre[9]).toEqual(9);
  });

  test('postOrderRec should recursively traverse in left-right-root order', () => {
    const post = postOrderRec(tree.root);
    expect(post).toBeInstanceOf(Array);
    expect(post[0]).toEqual(4);
    expect(post[1]).toEqual(5);
    expect(post[2]).toEqual(2);
    expect(post[3]).toEqual(10);
    expect(post[4]).toEqual(8);
    expect(post[5]).toEqual(9);
    expect(post[6]).toEqual(7);
    expect(post[7]).toEqual(6);
    expect(post[8]).toEqual(3);
    expect(post[9]).toEqual(1);
  });

  test('postOrderIt (no recursion) should traverse in left-right-root order using a stack', () => {
    const post = postOrderIt(tree.root);
    expect(post).toBeInstanceOf(Array);
    expect(post[0]).toEqual(4);
    expect(post[1]).toEqual(5);
    expect(post[2]).toEqual(2);
    expect(post[3]).toEqual(10);
    expect(post[4]).toEqual(8);
    expect(post[5]).toEqual(9);
    expect(post[6]).toEqual(7);
    expect(post[7]).toEqual(6);
    expect(post[8]).toEqual(3);
    expect(post[9]).toEqual(1);
  });

  test('inOrderRec should recursively traverse in left-root-right order', () => {
    const inOrder = inOrderRec(tree.root);
    expect(inOrder).toBeInstanceOf(Array);
    expect(inOrder[0]).toEqual(4);
    expect(inOrder[1]).toEqual(2);
    expect(inOrder[2]).toEqual(5);
    expect(inOrder[3]).toEqual(1);
    expect(inOrder[4]).toEqual(10);
    expect(inOrder[5]).toEqual(3);
    expect(inOrder[6]).toEqual(8);
    expect(inOrder[7]).toEqual(7);
    expect(inOrder[8]).toEqual(9);
    expect(inOrder[9]).toEqual(6);
  });
}); 
