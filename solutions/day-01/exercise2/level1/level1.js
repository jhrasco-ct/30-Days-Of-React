// 1. Get user input using prompt(“Enter your age:”).
// If user is 18 or older, give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}

// 2. Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.
const myAge = 21;
const yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} year(s) older than you.`);
} else if (myAge < yourAge) {
  console.log(`You are ${yourAge - myAge} year(s) older than me.`);
} else {
  console.log("We have the same age.");
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'.
// Try to implement it in two ways
let a = 4;
let b = 3;

// 3.1. using if else
const checkUsingIfElse = () => {
  if (a > b) {
    return "a is greater than b";
  } else {
    return "a is less than b";
  }
};

// 3.2. ternary operator
const checkUsingTernaryOperator = () =>
  a > b ? "a is greater than b" : "a is less than b";

// 4. Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?
const input = prompt("Enter a number:");
if (input % 2 == 0) {
  console.log(`${input} is an even number`);
} else {
  console.log(`${input} is an odd number`);
}
