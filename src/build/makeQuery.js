const { IntervalTree, Interval, IntervalNode } = require("../intervalTree");

function makeQuery(input) {
  const tree = new IntervalTree();

  const nodes = input.map(({ key: [start, end], val }, index) => {
    return new IntervalNode(new Interval(start, end), { val, index });
  });

  tree.build(nodes);
  // tree.checkTree(input.length);

  const query = (index) => {
    const results = tree.search(index);
    return findFirstFromOriginal(results);
  };
  // Find the first range containing an index
  return query;
}

function findFirstFromOriginal(results) {
  if (results.length > 0) {
    const resultIndex = findIndexOfFirst(results);
    const result = results[resultIndex];
    console.log(`----- SECOND RESULT ----- (${results.length})`);
    console.log(result);
    console.log("\n");
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
