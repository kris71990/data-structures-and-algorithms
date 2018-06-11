'use strict';

import BinarySearchTree from '../../data-structures/binary-search-tree/binary-search-tree';
import Node from '../../data-structures/binary-tree/binary-tree-node';
import findClosestValue from '../find-closest-bt';
import BinaryTree from '../../data-structures/binary-tree/binary-tree';

const nine = new Node(9);
const six = new Node(6);
const twelve = new Node(12);
const two = new Node(2);
const fifteen = new Node(15);
const three = new Node(3);

const bst = new BinarySearchTree(nine);
bst.insert(six);
bst.insert(twelve);
bst.insert(two);
bst.insert(fifteen);
bst.insert(three);

describe('Testing BinarySearch Tree - find closest value', () => {
  test('should find value of node with closest value to target', () => {
    expect(findClosestValue(bst, 13)).toEqual(12);   
    expect(findClosestValue(bst, 1)).toEqual(2);    
    expect(findClosestValue(bst, 23)).toEqual(15);     
    expect(findClosestValue(bst, 13)).toEqual(12); 
    expect(findClosestValue(bst, -5)).toEqual(2);    
  });

  test('should return value if it is the same', () => {
    expect(findClosestValue(bst, 2)).toEqual(2);
    expect(findClosestValue(bst, 15)).toEqual(15);
    expect(findClosestValue(bst, 3)).toEqual(3);
    expect(findClosestValue(bst, 9)).toEqual(9);   
  });

  test('should return null if no root in tree, or if no tree at all', () => {
    expect(findClosestValue(new BinaryTree())).toBeNull();
    expect(findClosestValue()).toBeNull();
  });
});
