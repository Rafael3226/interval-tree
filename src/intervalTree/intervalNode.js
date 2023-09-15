class IntervalNode {
  constructor(interval, data) {
    this.interval = interval;
    this.max = interval.end; // Maximum endpoint in this subtree
    this.left = null;
    this.right = null;
    this.data = data;
  }

  parseData() {
    const {
      interval: { start, end },
      data,
    } = this;
    return { key: [start, end], ...data };
  }
}

module.exports = IntervalNode;
