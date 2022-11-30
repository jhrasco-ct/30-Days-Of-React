// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1.1. Sort the array and find the min and max age
ages.sort();
const min = ages[0];
const max = ages[ages.length - 1];

// 1.2. Find the median age (one middle item or two middle items divided by two)
let median = 0;
if (ages.length % 2 == 0) {
  const mid = ages.length / 2;
  median = (ages[mid - 1] + ages[mid]) / 2;
} else {
  const mid = parseInt(ages.length / 2);
  median = ages[mid];
}

// 1.3. Find the average age(all items divided by number of items)
const total = ages.reduce((total, age) => total + age);
const average = total / ages.length;

// 1.4. Find the range of the ages(max minus min)
const range = max - min;

// 1.5. Compare the value of (min - average) and (max - average), use abs() method
console.log(`(min - average): ${Math.abs(min - average)}`);
console.log(`(max - average): ${max - average}`);

// 2. Slice the first ten countries from the countries array
const first10Countries = countries.slice(0, 10);

// 3. Find the middle country(ies) in the countries array
let middleCountries;
if (countries.length % 2 == 0) {
  const mid = countries.length / 2;
  middleCountries = countries.slice(mid - 1, mid + 1);
} else {
  const mid = parseInt(countries.length / 2);
  middleCountries = countries.slice(mid, mid + 1);
}

// 4. Divide the countries array into two equal arrays if it is even.
// If countries array is not even, one more country for the first half.
if (countries.length % 2 == 0) {
  const mid = countries.length / 2;
  const firstSet = countries.slice(0, mid);
  const secondSet = countries.slice(mid, countries.length);
} else {
  const mid = parseInt(countries.length / 2);
  const firstSet = countries.slice(0, mid);
  const secondSet = countries.slice(mid, countries.length);
}
