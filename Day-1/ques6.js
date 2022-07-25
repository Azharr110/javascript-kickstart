// Write a program to print the minimum number in the following array
// [ 12, 9,12,4,56,12,124 ],

let numbers = [12, 9, 12, 4, 56, 12, 124];

let min = 100000;

numbers.forEach((item) => {
  if (min > item) min = item;
});

console.log(min);
