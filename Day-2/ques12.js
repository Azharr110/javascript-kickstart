// Calculator-

// Implement a function calculator(checkType) with a parameter, checkType that checks
// the type of operator and performs task accordingly on two variables a and b.
// checkType description-
// A denotes addition.
// B denotes substraction.
// C denotes multiplication.
// D denotes division.

// Return the result from this function.

// Example-

// If a is 10, b is 5.
// calculator(A) returns 15.
// calculator(B) returns 5.
// calculator(C) returns 50.
// calculator(D) returns 2.

// Note-assume a and b to be global variables.

let a = 10;
let b = 5;
// let A = "+";
// let B = "-";
// let C = "*";
// let D = "/";
function calculator(X) {
  if (X === "A") return a + b;

  if (X === "B") return a - b;

  if (X === "C") return a * b;

  if (X === "D") return a / b;
}

console.log(calculator("A"));
