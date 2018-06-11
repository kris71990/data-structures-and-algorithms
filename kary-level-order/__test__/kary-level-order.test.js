'use strict';

import KAryTree from '../../data-structures/kary-tree/kary-tree';
import KAryNode from '../../data-structures/kary-tree/kary-node';
import levelTraversal from '../kary-level-order';

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3); 
one.appendChild(4); 

one.children[1].appendChild(5); 
one.children[1].appendChild(6); 
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

describe('level order traversal', () => {
  test('should return string of nodes with levels separated by new lines', () => {
    const traversal = levelTraversal(kAryTree.root);

    expect(traversal.charAt(0)).toEqual('1');
    expect(traversal.charAt(1)).toEqual('\n');

    expect(traversal.charAt(2)).toEqual('2');
    expect(traversal.charAt(3)).toEqual('3');
    expect(traversal.charAt(4)).toEqual('4');

    expect(traversal.charAt(5)).toEqual('\n');
    expect(traversal.charAt(6)).toEqual('5');
    expect(traversal.charAt(7)).toEqual('6');
    expect(traversal.charAt(8)).toEqual('7');
    expect(traversal.charAt(9)).toEqual('8');
  });

  test('should return undefined if no root', () => {
    expect(levelTraversal(new KAryTree().root)).toBeUndefined();
  });
});
