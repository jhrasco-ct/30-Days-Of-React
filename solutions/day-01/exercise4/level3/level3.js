// 1. Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
const randomInt = (upperBound, lowerBound = 0) => {
  const min = Math.ceil(lowerBound);
  const max = Math.floor(upperBound);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const userIdGeneratedByUser = () => {
  const characterCount = prompt("Enter the number of characters:");
  const userIdCount = prompt("Enter the number of ids:");
  const alphaNumeric =
    "12345678910abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let userIds = [];

  for (let i = 0; i < userIdCount; i++) {
    let userId = "";
    for (let j = 0; j < characterCount; j++) {
      userId += alphaNumeric[randomInt(alphaNumeric.length)];
    }
    userIds.push(userId);
  }
  return userIds;
};

console.log(userIdGeneratedByUser());

// 2. Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = (space, count) => {
  if (space.toLowerCase() === "hexa") {
    return [...Array(count)].map(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
  } else if (space.toLowerCase() === "rgb") {
    return [...Array(count)].map(() => {
      return `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)})`;
    });
  }
  return null;
};

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (array) => {
  let currentIndex = array.length - 1;

  while (currentIndex != 0) {
    const randomIndex = randomInt(currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

console.log(shuffleArray([1, 2, 3, 4, 5, 6]));

// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(10));

// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (parameter) => parameter == null || parameter.length === 0;

console.log(isEmpty([]));
console.log(isEmpty(""));
console.log(isEmpty(null));
console.log(isEmpty("we"));

// 6. Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.
const average = (array) => {
  if (!Array.isArray(array)) {
    throw "Parameter must be an array.";
  }

  let total = 0;
  array.forEach((element) => {
    if (typeof element === "number") {
      total += element;
    } else {
      throw "Array must not contain a non-numeric element.";
    }
  });
  return total / array.length;
};

console.log(average([10, 2, "s"]));
