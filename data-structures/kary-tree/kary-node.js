'use strict';

class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend = new KaryNode(value);
    this.children.push(nodeToAppend);
  }
}

export default KaryNode;
