'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      return this._insert(this.root, nodeToInsert);
    }
    return null;
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        return this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      return this._insert(rootNode.right, nodeToInsert);
    }
    return null;
  }

  find(value) {
    if (!this.root) return null;
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }

  findMin(node) {
    let currentNode = node;
    while (currentNode === currentNode.left) {
      currentNode = currentNode.left;
    }
    console.log(this);
    return currentNode;
  }

  remove(value) {
    if (!this.find(value)) return null;
    const rootNode = this.root;
    return this._remove(rootNode, value);
  }

  _remove(rootNode, value) {
    if (!rootNode) return rootNode;

    if (value < rootNode.value) {
      rootNode.left = this._remove(rootNode.left, value);
    } else if (value > rootNode.value) {
      rootNode.right = this._remove(rootNode.right, value);
    } else {
      if (!rootNode.left) {
        const temp = rootNode.right;
        rootNode = null;
        return temp;
      } else if (!rootNode.right) {
        const temp = rootNode.left;
        rootNode = null;
        return temp;
      }
      const temp = this.findMin(rootNode.right);
      rootNode.value = temp.value;
      rootNode.right = this._remove(rootNode.right, temp.value);
    }
    return rootNode;
  }
}

export default BinarySearchTree;
