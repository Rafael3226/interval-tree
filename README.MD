# Think Cell 1st Task

## Task Description

You are given the following source code:

```javascript
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
```

The array `sampleInput` contains a list of intervals (key) which are mapped to a value (val). The function `makeQuery` takes input of this format and returns a query function. The query function takes a key argument and finds the interval that (right exclusive) contains this key. It then returns the corresponding value for this interval. If no interval is found, the query function returns “undefined”. The function can be used like this:

```javascript
query = makeQuery(sampleInput);
query(3); // returns 'red'
```

Note that `sampleInput` is just example data. You should expect the real input to be much bigger, and it can contain arbitrary data for mapped values. The input is not ordered, and the first interval takes precedence in case of overlaps.

Your task is to rewrite and improve `makeQuery`. The provided query function is very simple and inefficient for large input data. Imagine `makeQuery` to be called once on a given input and preprocess it. Your returned query function should be able to efficiently handle many requests for arbitrary input data. Apart from that, it should give the same results as our query function.

## Binary Search

## Interval Tree

An interval tree is a data structure used in computer science and computational geometry for efficient storage and retrieval of intervals (also known as segments or ranges) and their associated data. It is particularly useful for solving various interval-related problems and queries efficiently.

The choice between using an insert method and a build method when constructing an interval tree can impact the performance of queries depending on the specific implementation and usage patterns.

- **Build Time**: The build method constructs the interval tree from a list of intervals all at once. The time complexity for building the tree using this method is O(n log n), where n is the number of intervals. This is because the algorithm used for building the tree can sort and partition the intervals efficiently.

- **Query Performance**: Interval trees built using a build method are generally well-balanced, which ensures good query performance with a time complexity of O(log n) for most queries. This is because the tree's structure is optimized during construction.

Ultimately, If you need to perform a lot of queries on the interval tree, the build method is likely the better option for overall performance.
