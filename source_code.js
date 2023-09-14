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

function makeQuery(input) {
  return (key) =>
    input.find(function (item) {
      return item.key[0] <= key && key < item.key[1];
    })?.val;
}
