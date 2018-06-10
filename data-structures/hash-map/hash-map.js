'use strict';

import LinkedList from '../linked-list/linked-list';

class HashMap {
  constructor(capacity = 50) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key) {
    if (typeof key !== 'string') {
      throw new TypeError('Hashmap Error - key should be string');
    }

    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this._capacity;
  }

  set(key, htvalue) {
    const hash = this._generateHash(key);

    if (!this._buckets[hash]) {
      this._buckets[hash] = new LinkedList().insertAtEnd({ key, htvalue });
      return this;
    }

    this._buckets[hash].append(new LinkedList().insertAtEnd({ key, htvalue }));
    return this;
  }

  get(key) {
    const hash = this._generateHash(key);
    const error = new Error(`No entry for ${key}`);

    if (!this._buckets[hash]) {
      throw error;
    }

    const node = this._buckets[hash];
    // .find(foundNode => foundNode.head.value.key === key);
    console.log(node);
    if (node) return node.head.value.htvalue;
    return error;
  }

  delete(key) {
    const hash = this._generateHash(key);
    const error = new Error(`No entry for ${key}`);

    if (!this._buckets[hash]) {
      throw error;
    }

    const node = this._buckets[hash].find(foundNode => foundNode.value.key === key);

    if (node) {
      this._buckets[hash] = this._buckets[hash].remove(node);
      console.log('Successfully removed');
      return 'Successfully removed';
    }

    return error;
  }
}

export default HashMap;
