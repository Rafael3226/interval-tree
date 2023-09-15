const Interval = require("./interval.js");
const IntervalNode = require("./intervalNode.js");

class IntervalTree {
  constructor() {
    this.root = null;
  }

  build(nodes) {
    this.root = this._build(
      nodes.sort((a, b) => a.interval.start - b.interval.end)
    );
  }

  _build(nodes) {
    if (nodes.length === 0) {
      return null;
    }

    const middle = Math.floor(nodes.length / 2);
    let { interval, data } = nodes[middle];
    const middleNode = new IntervalNode(interval, data);
    middleNode.left = this._build(nodes.slice(0, middle));
    middleNode.right = this._build(nodes.slice(middle + 1));

    return middleNode;
  }

  insert(node) {
    this.root = this._insert(this.root, node);
  }

  _insert(parent, child) {
    if (parent === null) {
      return child;
    }

    // Choose the subtree to insert into based on start values
    if (child.interval.start < parent.interval.start) {
      parent.left = this._insert(parent.left, child);
    } else {
      parent.right = this._insert(parent.right, child);
    }

    return parent;
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
