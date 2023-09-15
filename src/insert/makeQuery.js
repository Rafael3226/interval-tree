const { IntervalTree, Interval } = require("../intervalTree");

function makeQuery(input) {
  const tree = new IntervalTree();

  for (const [index, range] of Object.entries(input)) {
    const {
      key: [start, end],
      val,
    } = range;
    const interval = new Interval(start, end);
    const data = {
      index: Number(index),
      val,
    };
    tree.insert(interval, data);
  }

  const query = (index) => {
    const results = tree.search(index);
    console.log("----- RESULTS -----\n" + results.length);
    if (results.length > 0) {
      const resultIndex = findIndexOfSmallestValue(results);
      console.log("----- INDEX -----\n" + JSON.stringify(resultIndex));
      const result = results[resultIndex];
      console.log("----- RESULT -----\n");
      console.log(result);
      const val = result.val;
      return val;
    }
    //console.log(results);
    return undefined; // No range contains the index
  };
  // Find the first range containing an index
  return query;
}

function findIndexOfSmallestValue(arr) {
  let j = 0;
  let value = arr[j].index;
  for (let i = 1; i < arr.length; i++) {
    const newValue = arr[i].index;
    if (newValue < value) {
      value = newValue;
      j = i;
    }
  }
  return j;
}

module.exports = makeQuery;
