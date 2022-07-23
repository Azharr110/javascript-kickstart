let fruits = ["Apple", "Orange", "Papaya"];
let myFruit = fruits[2];
// console.log(myFruit);

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

// console.log("Name = ", courses[0].name);
// console.log("Marks = ", courses[0].marks);
// console.log("Chapter = ", courses[0].chapters);

// // console.log("----------------------- Improved");
// let myCourse = courses[0];
// console.log(myCourse);
// console.log("Name = ", myCourse.name);
// console.log("Marks = ", myCourse.marks);
// console.log("Chapter = ", myCourse.chapters);

// courses.forEach((element) => {
//   if (element.id === 20) {
//     console.log("Name = ", element.name);
//     console.log("Marks = ", element.marks);
//     console.log("Chapter = ", element.chapters);
//   }
// });

const outputCourses = courses.map((myCourse, index) => {
  // delete myCourse.name;
  return { ...myCourse, title: myCourse.name };
});
// console.log(outputCourses);

// Array Functions

let planets = [
  "Earth",
  "Mars",
  "Jupiter",
  "Venus",
  "Saturn",
  "SMAC",
  "Neptune",
  "Pluto",
  "Sun",
];

// Problem [Brute Force]
// console.log(planets[0]);
// console.log(planets[1]);
// console.log(planets[2]);
// console.log(planets[3]);
// console.log(planets[4]);
// console.log(planets[5]);
// console.log(planets[6]);

//

// planets.forEach((element, index) => {
//   console.log("Planet #", index, ": ", element);
// });

const outputPlanet = planets.map((element, index) => {
  // console.log("Planet #", index, ": ", element);
  return { id: index, name: element, initial: element.charAt(0) };
});

// console.log(outputPlanet);

//SPREAD FUNCTION
//---
// Ex-1
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [...numbers, 6];
// console.log(newNumbers);
//---
//Ex-2
// const person = {
//   name: "Azhar",
// };

// const newPerson = {
//   ...person,
//   age: 22,
// };
// console.log(newPerson);
