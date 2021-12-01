// ****************************************************TASK 1 - OBJECTS****************************************************

const personA = {
  name: "Dave",
  age: 56,
  location: "Edinburgh",
  likes: "football",
};
const personB = {
  name: "Sara",
  age: 12,
  location: "Machester",
  likes: "dancing",
};
const personC = {
  name: "Stephanie",
  age: 30,
  location: "Hull",
  likes: "running",
};
const personD = {
  name: "John",
  age: 44,
  location: "London",
  likes: "cycling",
};

function biography(person) {
  return (
    "Hi, my name is " +
    person.name +
    ", I am " +
    person.age +
    " years old. I live in " +
    person.location +
    " and I like " +
    person.likes +
    "."
  );
}

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));

const drivingAge = 17;

const isOldEnough = personC.age > drivingAge;

console.log("Am I old enough to drive? " + isOldEnough);

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y = " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y = " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y = " + multiplication);

const division = x / y;

console.log("Division: x / y = " + division);

console.log(x * x);

console.log(x + x + y);

console.log((x * y) / x);

const z = 10;

console.log(z * x * y);

// ****************************************************TASK 3****************************************************
const age = 30;
const ageToDrive = 17;

const isOldEnoughToDrive = age > ageToDrive;

console.log("Am I old enough to drive? " + isOldEnoughToDrive);
