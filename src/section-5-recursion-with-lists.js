// Section 5: Recursion with Lists
const pair = (f, r) => (op) => op(f, r);
const first = (p) => p((f, r) => f);
const rest = (p) => p((f, r) => r);
const isEmpty = (p) => p === null;
const prepend = (x, p) => pair(x, p);

// Recursive map function
const map = (f, p) => (isEmpty(p) ? null : prepend(f(first(p)), map(f, rest(p))));
const list = prepend(1, prepend(2, prepend(3, null)));
const doubled = map((x) => x * 2, list);
console.log(first(doubled)); // Output: 2

