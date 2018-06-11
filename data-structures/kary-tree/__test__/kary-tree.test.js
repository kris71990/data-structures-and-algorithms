'use strict';

import KaryTree from '../kary-tree';
import KaryNode from '../kary-node';

const one = new KaryNode(1);
one.appendChild(8);
one.appendChild(5);
one.appendChild(2);
one.children[1].appendChild(23);
one.children[2].appendChild(7);
one.children[2].children[0].appendChild(13);

const tree = new KaryTree(one);

describe('K-ary Tree tests', () => {
  test('newly instantiated K-ary Tree root should be null', () => {
    expect(new KaryTree().root).toBeNull();
  });
  
  test('K-ary Tree methods', () => {
    const methods = Object.getOwnPropertyNames(KaryTree.prototype);
    expect(methods).toHaveLength(9);
  });

  test('breadthFirstTraversal() should return nodes in level order', () => {
    const traversal = tree.breadthFirstTraversal();
    expect(traversal).toBeInstanceOf(Array);
    expect(traversal[0]).toEqual(1);
    expect(traversal[1]).toEqual(8);
    expect(traversal[2]).toEqual(5);
    expect(traversal[3]).toEqual(2);
    expect(traversal[4]).toEqual(23);
    expect(traversal[5]).toEqual(7);
    expect(traversal[6]).toEqual(13);
  });

  test('find(val) finds a node in the tree', () => {
    const five = tree.find(5);
    expect(five).toBeInstanceOf(KaryNode);
    expect(five.value).toEqual(5);
    expect(five.children).toBeInstanceOf(Array);
    expect(five.children).toHaveLength(1);

    const two = tree.find(2);
    expect(two).toBeInstanceOf(KaryNode);
    expect(two.value).toEqual(2);
    expect(two.children).toBeInstanceOf(Array);
    expect(two.children).toHaveLength(1);
    expect(two.children[0].value).toEqual(7);
  });

  test('toString() returns traversal of tree as string', () => {
    const string = tree.toString();
    expect(typeof string).toEqual('string');
    expect(string.charAt(0)).toEqual('1');
    expect(string.charAt(1)).toEqual('\n');
    expect(string.charAt(2)).toEqual('8');
    expect(string.charAt(3)).toEqual('\n');
    expect(string.charAt(4)).toEqual('5');
    expect(string.charAt(5)).toEqual('\n');
    expect(string.charAt(6)).toEqual('2');
    expect(string.charAt(7)).toEqual('\n');
    expect(string.charAt(8)).toEqual('2');
    expect(string.charAt(9)).toEqual('3');
    expect(string.charAt(10)).toEqual('\n');
    expect(string.charAt(11)).toEqual('7');
    expect(string.charAt(12)).toEqual('\n');
    expect(string.charAt(13)).toEqual('1');
    expect(string.charAt(14)).toEqual('3');
    expect(string.charAt(15)).toEqual('\n');
  });

  test('toArray() returns traversal of tree as array', () => {
    const array = tree.toArray();
    expect(array).toBeInstanceOf(Array);
    expect(array[0]).toEqual(1);
    expect(array[1]).toEqual(2);
    expect(array[2]).toEqual(7);
    expect(array[3]).toEqual(13);
    expect(array[4]).toEqual(5);
    expect(array[5]).toEqual(23);
    expect(array[6]).toEqual(8);
  });
});
