// Section 2: Understanding the Code Snippet
// Provided code snippet
const pair = (f, r) => (op) => op(f, r);
const first = (p) => p((f, r) => f);
const rest = (p) => p((f, r) => r);

console.log(first(pair(1, 2))); // Output: 1
