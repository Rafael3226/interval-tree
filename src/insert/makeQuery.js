const { IntervalTree, Interval, IntervalNode } = require("../intervalTree");

function makeQuery(input) {
  const tree = new IntervalTree();
  input.forEach(({ key: [start, end], val }, index) => {
    const node = new IntervalNode(new Interval(start, end), {
      val,
      index,
    });
    tree.insert(node);
  });

  const query = (index) => {
    const results = tree.search(index);
    return getFirst(results);
  };
  // Find the first range containing an index
  return query;
}

function getFirst(results) {
  if (results.length > 0) {
    const resultIndex = getFirstIndex(results);
    const result = results[resultIndex];
    console.log("----- RESULT -----\n");
    console.log(result);
    const val = result.val;
    return val;
  }
  //console.log(results);
  return undefined; // No range contains the index
}

// Find the index of arr with the samallest index from the original array
function getFirstIndex(results) {
  return arr.reduce(
    (minIndex, current, currentIndex) =>
      current.index < arr[minIndex].index ? currentIndex : minIndex,
    0
  );
}

module.exports = makeQuery;
