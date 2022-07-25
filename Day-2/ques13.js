// Print the following pattern using loops

// @
// @@
// @@@
// @@@@

let a = 4;
let hash = "@";

for (let i = 0; i < a; i++) {
  for (let h = 0; h < i + 1; h++) {
    process.stdout.write(hash);
  }
  process.stdout.write("\n");
}

// Print the following pattern using loops

//    @
//   @@
//  @@@
// @@@@
