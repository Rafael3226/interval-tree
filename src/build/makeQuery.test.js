const assert = require("assert");
const makeQueryInitial = require("../../init/makeQuery.js");
const makeQuerySolution = require("./makeQuery.js");
const sampleInputBig2 = require("../../sampleInputBig2.json");

function main() {
  const length = 5 * 10 ** 2; // Max Value 5x10^5
  const input = sampleInputBig2.slice(0, length);
  console.log(length);
  const testCases = [
    1, 3145728, -32505857, 58720257, 91226111, 99999999, 91226, -5058,
  ];
  testCompareFunctions(input, testCases);
}

function testCompareFunctions(input, testCases) {
  const solutionQuery = makeQuerySolution(input);
  const initialQuery = makeQueryInitial(input);

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
