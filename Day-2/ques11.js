// Area and perimeter of circle

// You have to implement a function findAreaAndPeriCircle() that takes a number n and print its area
// and perimeter as if it is a circle

// Example-

// n=4
// area=50.24
// perimeter=25.12

// n=3
// area=28.26
// perimeter=18.84

// Note:- n is not an input, it can be a variable of your choice
// Revise maths to check formula.
//A = π × r2
//Circumference = 2πr

function findAreaAndPeriCircle(radius) {
  let area = 3.14 * radius * radius;
  let perimeter = 2 * 3.14 * radius;

  return { area, perimeter };
}
let x = findAreaAndPeriCircle(8);
console.log(x);
