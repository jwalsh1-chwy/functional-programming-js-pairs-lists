// Section 6: Building Complex Data Structures
const pair = (f, r) => (op) => op(f, r);
const first = (p) => p((f, r) => f);
const rest = (p) => p((f, r) => r);

// Building a binary tree using pairs
const makeTree = (value, left = null, right = null) => pair(value, pair(left, right));
const valueOf = (tree) => first(tree);
const leftOf = (tree) => first(rest(tree));
const rightOf = (tree) => rest(rest(tree));

// Create a binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5
const tree = makeTree(1, makeTree(2, makeTree(4), makeTree(5)), makeTree(3));

// Get the value of the root node
console.log(valueOf(tree)); // Output: 1

// Get the value of the left child of the root node
console.log(valueOf(leftOf(tree))); // Output: 2

// In-order traversal of the binary tree
const inOrderTraversal = (tree) => {
  if (tree === null) return [];
  return [
    ...inOrderTraversal(leftOf(tree)),
    valueOf(tree),
    ...inOrderTraversal(rightOf(tree))
  ];
};
console.log(inOrderTraversal(tree)); // Output: [4, 2, 5, 1, 3]
