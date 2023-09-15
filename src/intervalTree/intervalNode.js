class IntervalNode {
  constructor(interval, data) {
    this.data = data;
    this.interval = interval;
    this.left = null;
    this.right = null;
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
