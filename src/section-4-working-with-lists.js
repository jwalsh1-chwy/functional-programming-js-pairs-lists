// Section 4: Working with Lists
const pair = (f, r) => (op) => op(f, r);
const first = (p) => p((f, r) => f);
const rest = (p) => p((f, r) => r);
const isEmpty = (p) => p === null;
const prepend = (x, p) => pair(x, p);

// Building a simple list using pairs (1 -> 2 -> 3)
const list = prepend(1, prepend(2, prepend(3, null)));
console.log(first(list)); // Output: 1

// Getting the length of the list
const length = (p) => (isEmpty(p) ? 0 : 1 + length(rest(p)));
console.log(length(list)); // Output: 3
