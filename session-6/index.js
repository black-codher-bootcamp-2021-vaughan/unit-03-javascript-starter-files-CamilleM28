// Use this randomNumber inside of the while/for loops to generate a random number

// ****************************************************TASK 1****************************************************
let counter = 1;

while (counter <= 10) {
  const randomNumber = Math.round(Math.random() * 10);
  console.log(randomNumber);
  counter++;
}

// ****************************************************TASK 2****************************************************

for (let counter = 1; counter <= 10; counter++) {
  const randomNumber = Math.round(Math.random() * 10);
  console.log(randomNumber);
}
