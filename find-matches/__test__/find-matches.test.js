'use strict';

import findMatches from '../find-matches';
import KAryTree from '../../data-structures/kary-tree/kary-tree';
import KAryNode from '../../data-structures/kary-tree/kary-node';

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3); 
one.appendChild(3); 

one.children[1].appendChild(6); 
one.children[1].appendChild(6); 
one.children[1].appendChild(3);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

const list = findMatches(kAryTree, 3);

describe('should enter values into Linked List', () => {
  test('list should only include nodes of specified values', () => {
    expect(list.head.value.value).toEqual(3);
    expect(list.head.next.value.value).toEqual(3);
    expect(list.head.next.next.value.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });

  test('if no matches in the tree, return \'no matches\'', () => {
    expect(findMatches(kAryTree, 12)).toEqual('no matches');
  });
});
