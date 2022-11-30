// 1. Declare an empty array
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const array = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of your array
const length = array.length;

// 4. Get the first item, the middle item and the last item of the array
const firstItem = array[0];
const middleItem = array[Math.floor(length / 2)];
const lastItem = array[length - 1];

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
// The array size should be greater than 5.
const mixedDataTypes = ["ferson", 69, true, "cat", 101.9, false];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
itCompanies.forEach((company) => console.log(company));

// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies.map((company) => company.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  `${itCompanies.slice(0, -1).join(", ")} and ${
    itCompanies[itCompanies.length - 1]
  } are big IT companies.`
);

// 13. Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found
const companyExists = (company) => {
  const isFound = itCompanies.some(
    (element) => element.toLowerCase() === company.toLowerCase()
  );
  if (isFound) {
    return company;
  } else {
    return "not found";
  }
};

console.log(companyExists("Amazon"));
console.log(companyExists("Code and Theory"));

// 14. Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = [];

itCompanies.forEach((company) => {
  const oCount = company.toLowerCase().split("o").length - 1;
  oCount > 1 && filteredCompanies.push(company);
});

console.log(filteredCompanies);

// 15. Sort the array using sort() method
itCompanies.sort();

// 16. Reverse the array using reverse() method
itCompanies.reverse();

// 17. Slice out the first 3 companies from the array
itCompanies.slice(0, 3);

// 18. Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length - 3, itCompanies.length);

// 19. Slice out the middle IT company or companies from the array
if (itCompanies.length % 2 == 0) {
  const mid = itCompanies.length / 2;
  itCompanies.slice(mid - 1, mid + 1);
} else {
  const mid = parseInt(itCompanies.length / 2);
  itCompanies.slice(mid, mid + 1);
}

// 20. Remove the first IT company from the array
itCompanies.shift();

// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 == 0) {
  const mid = itCompanies.length / 2;
  itCompanies.splice(mid - 1, 2);
} else {
  const mid = parseInt(itCompanies.length / 2);
  itCompanies.splice(mid, 1);
}

// 22. Remove the last IT company from the array
itCompanies.pop();

// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
