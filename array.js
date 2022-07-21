let fruits = ["Apple", "Orange", "Papaya"];
let myFruit = fruits[2];
console.log(myFruit);

let courses = [
  {
    id: 10,
    name: "Maths",
    marks: 21,
    chapters: ["Algebra", "Matrix", "Trignometry"],
  },
  {
    id: 20,
    name: "physics",
    marks: 29,
    chapters: ["Space", "mars", "electricity"],
  },
  {
    id: 30,
    name: "chemistry",
    marks: 45,
    chapters: ["Acids", " fundamentals of chemistry"],
  },
  { id: 40, name: "computers", marks: 27, chapters: ["D.S", "Java", "C++"] },
];

console.log("Name = ", course[0].name);
console.log("Marks = ", course[0].marks);
console.log("Chapter = ", course[0].chapters);

console.log("----------------------- Improved");
let myCourse = courses[0];
console.log(myCourse);
console.log("Name = ", myCourse.name);
console.log("Marks = ", myCourse.marks);
console.log("Chapter = ", myCourse.chapters);
// Array Functions
