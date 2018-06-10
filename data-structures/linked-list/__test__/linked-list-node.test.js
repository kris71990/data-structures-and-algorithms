'use strict';

import Node from '../node-ll';

describe('Linked List Node test', () => {
  test('Insantiated node should have the followin properties', () => {
    const node = new Node(4);
    expect(node.value).toEqual(4);
    expect(node.next).toBeNull();

    const properties = Object.getOwnPropertyNames(node);
    expect(properties).toHaveLength(2);
    expect(properties[0]).toEqual('value');
    expect(properties[1]).toEqual('next');
  });
});
