const assert = require("assert");
const makeQuery = require("./makeQuery.js");

const sampleInput = [
  {
    key: [1, 4],
    val: "red",
  },
  {
    key: [-2, -1],
    val: "green",
  },
  {
    key: [2, 40],
    val: "blue",
  },
];

function main() {
  // Create a query function for testing
  const query = makeQuery(sampleInput);

  // Test cases
  assert.strictEqual(query(3), "red", 'Query result should be "red"');
  assert.strictEqual(query(-2), "green", 'Query result should be "green"');
  assert.strictEqual(query(39), "blue", 'Query result should be "blue"');
  assert.strictEqual(
    query(0),
    undefined,
    "Query result should be undefined for this key"
  );

  console.log("All tests passed!");
}

main();
