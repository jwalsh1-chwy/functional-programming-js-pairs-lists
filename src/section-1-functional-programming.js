// Section 1: Functional Programming
// Demonstrating key principles of functional programming

// Pure Function (no side effects, same output for same input)
const square = (n) => n * n;
console.log(square(5)); // Output: 25

// Higher-Order Function (function that takes another function as an argument)
const twice = (f, x) => f(f(x));
console.log(twice(square, 2)); // Output: 16

// Immutability (avoid changing data, create new data instead)
const append = (arr, value) => [...arr, value];
console.log(append([1, 2, 3], 4)); // Output: [1, 2, 3, 4]
