// Print the following pattern using loops

// ########
// ########
// ########
// ########

let a = 4;
let b = 8;
let hash = "#";

for (let i = 0; i < a; i++) {
  for (let h = 0; h < b; h++) {
    process.stdout.write(hash);
  }
  process.stdout.write("\n");
}
console.log(hash);

// let a = 4;
// let b = 8;
// let hash = "";

// for (let i = 0; i < a; i++) {
//   for (let h = 0; h < b; h++) {
//     hash += "#";
//   }
//   hash += "\n";
// }
// console.log(hash);
