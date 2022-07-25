// Write a program to add all the numbers in the following array and print it
// [ 12, 9,12,4,56,12,124 ]

let numbers = [12, 9, 12, 4, 56, 12, 10];
// let sum = 0;

// let bad =
//   numbers[0] +
//   numbers[1] +
//   numbers[2] +
//   numbers[3] +
//   numbers[4] +
//   numbers[5] +
//   numbers[6];

// console.log(bad);

// [12 , 21, 33, 37, 93, 105]

let sum = 0;

numbers.forEach((item) => {
  sum += item;

  console.log(sum);
});

console.log("Total :", sum);
