// Write a program to print the product of all the numbers in the following array
// [ 12, 9,12,4,56,12,124 ],

let numbers = [12, 9, 12, 4, 56, 12, 124];

let product = 1; // Multiply me hamesha 1 rahega

numbers.forEach((item) => {
  product *= item;
  console.log(product);
});

console.log("Total :", product);
