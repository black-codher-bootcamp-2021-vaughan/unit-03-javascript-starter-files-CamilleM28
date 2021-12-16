// ****************************************************TASK 1****************************************************
const animals = ["cat", "dog", "wolf", "lion", "eagle", "Zebra"];

// ****************************************************TASK 2****************************************************
const names = [
  "camille",
  "sam",
  "maya",
  "hanan",
  "jess",
  "ben",
  "george",
  "lewis",
  "sarah",
  "jane",
];

const numbers = [5, 325, 67, 100000, 150];

console.log(numbers.sort((a, b) => a - b));

// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: "shuri", age: 16 },
  { name: "killmonger", age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? 1 : -1;
}
function getName(person) {
  return person.name;
}

const inOrder = people.sort(compare).map(getName);
console.log(inOrder);

//code above is the same as cod below!

// const inOrder = people.sort(compare).map((person) => person.name);
// console.log(inOrder);

//Alternative:

// function inOrder() {
//   return people.sort(compare).map((person) => person.name);
// }

// console.log(inOrder());
