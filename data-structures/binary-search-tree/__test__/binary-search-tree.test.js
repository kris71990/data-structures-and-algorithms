'use strict';

import BinarySearchTree from '../binary-search-tree';
import Node from '../../binary-tree/binary-tree-node';

const two = new Node(2);
const twelve = new Node(12);
const six = new Node(6);
const three = new Node(3);
const one = new Node(1);
const nine = new Node(9);

const bst = new BinarySearchTree();

describe('Binary Search Tree tests', () => {
  test('newly instantiated Binary Search Tree root should be null', () => {
    expect(new BinarySearchTree().root).toBeNull();
  });
  
  test('Binary Search Tree methods', () => {
    const methods = Object.getOwnPropertyNames(BinarySearchTree.prototype);
    expect(methods).toHaveLength(10);
  });

  test('insert(val)', () => {
    bst.insert(nine);
    bst.insert(one);
    bst.insert(three);
    bst.insert(twelve);
    bst.insert(two);
    bst.insert(six);

    expect(bst.root.value).toEqual(9);
    expect(bst.root.left.value).toEqual(1);
    expect(bst.root.left.right.value).toEqual(3);
    expect(bst.root.right.value).toEqual(12);
    expect(bst.root.left.right.left.value).toEqual(2);
    expect(bst.root.left.right.right.value).toEqual(6);
  });

  test('find(val) finds node in tree', () => {
    const findThree = bst.find(3);
    expect(findThree.value).toEqual(3);
    expect(findThree.left.value).toEqual(2);
    expect(findThree.right.value).toEqual(6);

    const findSix = bst.find(6);
    expect(findSix.value).toEqual(6);
    expect(findSix.left).toBeNull();
    expect(findSix.right).toBeNull();

    const findOne = bst.find(1);
    expect(findOne.value).toEqual(1);
    expect(findOne.left).toBeNull();
    expect(findOne.right.value).toEqual(3);
  });

  test('remove(val) finds node in tree and removes it', () => {
    expect(bst.root.left.value).toEqual(1);
    bst.remove(1);
    expect(bst.root.left.value).toEqual(3);
  });
});
