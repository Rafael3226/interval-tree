function makeQuery(input) {
  return (key) =>
    input.find(function (item) {
      return item.key[0] <= key && key < item.key[1];
    })?.val;
}

module.exports = makeQuery;
