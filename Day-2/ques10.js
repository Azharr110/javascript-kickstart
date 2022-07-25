// Area and perimeter of square

// You have to implement a function findAreaAndPeriSquare() that takes a number n and print its area
// and perimeter as if it is a square

// Example-

// n=4
// area=16
// perimeter=16

// n=3
// area=9
// perimeter=12

// Note:- n is not an input, it can be a variable of your choice.

//A = a2
//P = 4a

function findAreaAndPeriSquare(side) {
  let area = side * side;
  let perimeter = 4 * side;
  return { area, perimeter };
}
let x = findAreaAndPeriSquare(3);
console.log(x);
