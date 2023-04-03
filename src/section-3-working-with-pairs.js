// Section 3: Working with Pairs
const pair = (f, r) => (op) => op(f, r);
const first = (p) => p((f, r) => f);
const rest = (p) => p((f, r) => r);

const p = pair(3, 4);
console.log(first(p)); // Output: 3
console.log(rest(p));  // Output: 4
