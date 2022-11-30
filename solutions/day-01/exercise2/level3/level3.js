// 1. Write a program which tells the number of days in a month.
let month = prompt("Enter a month:");
let numberOfDays = 0;

switch (month.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    numberOfDays = 31;
    break;
  case "february":
    numberOfDays = 28;
    break;
  default:
    numberOfDays = 30;
    break;
}

console.log(`${capitalizeFirstLetter(month)} has ${numberOfDays} days.`);

// 2. Write a program which tells the number of days in a month, now consider leap year.
month = prompt("Enter a month:");
numberOfDays = 0;

const isLeapYear = (year) => {
  // https://learn.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
  if (year % 4 != 0) {
    return false;
  }
  if (year % 100 != 0) {
    return true;
  }
  if (year % 400 == 0) {
    return true;
  }
  return false;
};

switch (month.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    numberOfDays = 31;
    console.log(`${capitalizeFirstLetter(month)} has ${numberOfDays} days.`);
    break;

  case "february":
    const year = prompt("Enter a year:");
    numberOfDays = isLeapYear(year) ? 29 : 28;
    console.log(
      `${capitalizeFirstLetter(month)} ${year} has ${numberOfDays} days.`
    );
    break;

  default:
    numberOfDays = 30;
    console.log(`${capitalizeFirstLetter(month)} has ${numberOfDays} days.`);
    break;
}
