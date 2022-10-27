// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadEquation = (a, b, c) => {
  if (a != null && b != null && c != null) {
    // x = [-b ± √(b2 - 4ac)]/2a
    const x1 = (b * -1 + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const x2 = (b * -1 - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return [...new Set([x1, x2])];
  } else {
    return 0;
  }
};

console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
  const stringFormat = (num) => num.toString().padStart(2, "0");
  const now = new Date();

  console.log(
    `${stringFormat(now.getDate())}/${stringFormat(
      now.getMonth() + 1
    )}/${now.getFullYear()} ${stringFormat(now.getHours())}:${stringFormat(
      now.getMinutes()
    )}`
  );
};

showDateTime();

// 4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => ({ y, x });

swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (array) => {
  const reversed = [];
  array.forEach((element) => {
    reversed.unshift(element);
  });
  return reversed;
};

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (array) =>
  array.map((element) => {
    if (typeof element === "string") {
      return element.toUpperCase();
    } else {
      return element;
    }
  });

console.log(capitalizeArray(["the", "quick", "brown", "fox"]));

// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const allItems = [];

const addItem = (item) => {
  allItems.push(item);
  return allItems;
};

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (index) => {
  allItems.splice(index, 1);
  return allItems;
};

// 9. Declare a function name evensAndOdds.
// It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (number) => {
  let oddCount = 0;
  let evenCount = 0;

  for (let i = 0; i <= number; i++) {
    i % 2 === 0 ? evenCount++ : odd++;
  }

  // Method 2
  /*
  const numberIncluding0 = number + 1;
  let oddCount = Math.ceil(numberIncluding0 / 2);
  let evenCount = Math.floor(numberIncluding0 / 2);
  */

  console.log(`The number of odds are ${oddCount}`);
  console.log(`The number of evens are ${evenCount}`);
};

// 10. Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...numbers) => numbers.reduce((sum, number) => sum + number, 0);

console.log(sum(1, 2, 3)); // -> 6
console.log(sum(1, 2, 3, 4)); // -> 10

// 11. Declare a function name userIdGenerator.
// When this function is called it generates seven character id. The function return the id.
const randomNumber = (lowerBound, upperBound) => {
  const min = Math.ceil(lowerBound);
  const max = Math.floor(upperBound);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const userIdGenerator = () => {
  const alphaNumeric =
    "12345678910abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let userId = "";
  for (let i = 0; i < 7; i++) {
    userId += alphaNumeric[randomNumber(0, alphaNumeric.length)];
  }
  return userId;
};

console.log(userIdGenerator());
