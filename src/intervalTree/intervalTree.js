const IntervalNode = require("./intervalNode.js");

class IntervalTree {
  constructor() {
    this.root = null;
  }
  insert(interval, data) {
    this.root = this._insert(this.root, interval, data);
  }

  _insert(node, interval, data) {
    if (node === null) {
      return new IntervalNode(interval, data);
    }

    // Update the maximum endpoint in this subtree
    node.max = Math.max(node.max, interval.end);

    // Choose the subtree to insert into based on start values
    if (interval.start < node.interval.start) {
      node.left = this._insert(node.left, interval, data);
    } else {
      node.right = this._insert(node.right, interval, data);
    }

    return node;
  }

  search(key) {
    return this._search(this.root, key);
  }

  _search(node, key) {
    if (node === null) {
      return [];
    }
    const results = [];
    if (key < node.interval.start) {
      results.push(...this._search(node.left, key));
    } else if (key >= node.interval.end) {
      results.push(...this._search(node.right, key));
    } else {
      // If the key is within the interval, add this node to the results
      results.push(node.parseData());
      // Continue searching in both left and right subtrees
      results.push(...this._search(node.left, key));
      results.push(...this._search(node.right, key));
    }

    return results;
  }
}

module.exports = IntervalTree;
