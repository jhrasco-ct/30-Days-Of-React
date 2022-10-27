// 1. Write a code which can give grades to students according to theirs scores:
//    80-100, A
//    70-79, B
//    60-69, C
//    50-59, D
//    0-49, F
const score = prompt("Enter the student's score:");

let grade;
if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Grade: ${grade}`);

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
//    September, October or November, the season is Autumn.
//    December, January or February, the season is Winter.
//    March, April or May, the season is Spring
//    June, July or August, the season is Summer
const month = prompt("Enter a month:");
let season;

switch (month.toLowerCase()) {
  case "september":
  case "october":
  case "november":
    season = "Autumn";
    break;
  case "december":
  case "january":
  case "february":
    season = "Winter";
    break;
  case "march":
  case "april":
  case "may":
    season = "Spring";
    break;
  case "june":
  case "july":
  case "august":
    season = "Summer";
    break;
  default:
    season = "Unknown";
    break;
}

console.log(`The season is ${capitalizeFirstLetter(season)}.`);

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
const day = prompt("Enter a day:");
switch (day.toLowerCase()) {
  case "saturday":
  case "sunday":
    console.log(`${capitalizeFirstLetter(day)} is a weekend.`);
    break;
  default:
    console.log(`${capitalizeFirstLetter(day)} is a working day.`);
    break;
}
