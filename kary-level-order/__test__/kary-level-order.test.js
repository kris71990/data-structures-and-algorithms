'use strict';

import { KAryTree, KAryNode, levelTraversal } from '../kary-level-order';

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
  });
});
