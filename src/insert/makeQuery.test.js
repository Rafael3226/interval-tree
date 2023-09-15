const assert = require("assert");
const makeQueryInitial = require("../../init/makeQuery.js");
const makeQuerySolution = require("./makeQuery.js");
const sampleInputBig2 = require("../../sampleInputBig2.json");

function main() {
  const numItems = 10000;
  testCompareFunctions(sampleInputBig2.slice(0, numItems));
}

function testCompareFunctions(input) {
  const solutionQuery = makeQuerySolution(input);
  const initialQuery = makeQueryInitial(input);

  const testCases = [1, 3145728, -32505857, 58720257, 91226111, 99999999];
  for (const testCase of testCases) {
    console.log(`----- Test Case Value: ${testCase} -----`);
    const expected = initialQuery(testCase);
    const actual = solutionQuery(testCase);
    assert.strictEqual(
      actual,
      expected,
      `The query result for ${testCase} should be "${expected}"`
    );
  }
  console.log("All comparing functions tests passed! \n");
}

main();
