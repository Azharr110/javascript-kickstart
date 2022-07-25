// Write a program to print the maximum number in the following array
// [ 12, 9,12,4,56,12,124 ],

let numbers = [12, 9, 12, 4, 56, 12, 124];
let max = 0;

numbers.forEach((item) => {
  if (max < item) max = item;
  console.log(max);
});

console.log("total : ", max);
