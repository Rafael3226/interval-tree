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
    return findFirstFromOriginal(results);
  };
  // Find the first range containing an index
  return query;
}

function findFirstFromOriginal(results) {
  console.log("----- RESULTS -----\n" + results.length + "\n");
  console.log(results);
  if (results.length > 0) {
    const resultIndex = findIndexOfFirst(results);
    console.log("----- INDEX -----\n" + JSON.stringify(resultIndex));
    const result = results[resultIndex];
    console.log("----- RESULT -----\n");
    console.log(result);
    const val = result.val;
    return val;
  }
  //console.log(results);
  return undefined; // No range contains the index
}

// Find the index of arr
// with the sallest index from the original array
function findIndexOfFirst(arr) {
  return arr.reduce(
    (minIndex, current, currentIndex) =>
      current.index < arr[minIndex].index ? currentIndex : minIndex,
    0
  );
}

module.exports = makeQuery;
