// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("Harold", "Rasco"));

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (num1, num2) => +num1 + +num2;
console.log(addNumbers(50, 19));

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);
console.log(areaOfCircle(50));

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = (celcius) => (celcius * 9) / 5 + 32;
console.log(convertCelciusToFahrenheit(28));

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more
const calculateBMI = (weight, height) => weight / Math.pow(height, 2);
const bmi = calculateBMI(80, 1.65);

if (bmi >= 30) {
  console.log("Obese");
} else if (bmi >= 25) {
  console.log("Overweight");
} else if (bmi >= 18.5) {
  console.log("Normal weight");
} else {
  console.log("Underweight");
}

// 6. Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
  switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "november":
      return "Autumn";
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    default:
      return "Unknown";
  }
};
console.log(checkSeason("January"));
