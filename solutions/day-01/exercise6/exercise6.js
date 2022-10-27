const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Print the price of each product using forEach
products.forEach((product) => console.log(product.price));

// 2. Print the product items as follows using forEach
//    The price of banana is 3 euros.
//    The price of mango is 6 euros.
//    The price of potato is unknown.
//    The price of avocado is 8 euros.
//    The price of coffee is 10 euros.
//    The price of tea is unknown.
products.forEach((product) => {
  const price = typeof product.price === "number" ? product.price : "unknown";
  console.log(`The price of ${product.product} is ${price}.`);
});

// 3. Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach((product) => {
  if (typeof product.price === "number") {
    sum += product.price;
  }
});

// 4. Create an array of prices using map and store it in a variable prices
const prices = products.map((product) => product.price);

// 5. Filter products with prices
products.filter((product) => typeof product.price === "number");

// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
const sum2 = products
  .map((product) => product.price)
  .filter((price) => typeof price === "number")
  .reduce((sum, price) => sum + price, 0);

// 7. Calculate the sum of all the prices using reduce only
const sum3 = products.reduce((sum, product) => {
  if (typeof product.price === "number") {
    return sum + product.price;
  } else {
    return sum;
  }
}, 0);

// 8. Find the first product which doesn't have a price value
const noPriceProduct = products.find(
  (product) => typeof product.price !== "number"
);
console.log(noPriceProduct);

// 9. Find the index of the first product which does not have price value
const noPriceProductIndex = products.findIndex(
  (product) => typeof product.price !== "number"
);
console.log(noPriceProductIndex);

// 10. Check if some products do not have a price value
const someProductsHaveNoPrice = products.some(
  (product) => typeof product.price !== "number"
);
console.log(someProductsHaveNoPrice);

// 11. Check if all the products have price value
const allProductsHavePrice = products.every(
  (product) => typeof product.price === "number"
);
console.log(allProductsHavePrice);

// 12. Explain the difference between forEach, map, filter and reduce

// forEach is used to iterate through array.
// map - used to modify the array.
// filter - used to filter out elements based on the given condition.
// reduce - used to get a single value by accumulating the function's result.

// 13. Explain the difference between filter, find and findIndex

// filter - used to filter out elements based on the given condition.
// find - used to get the first occurence of the element that satisfy the given condition
// findIndex - used to get the index of the first occurence of the element that satisfy the given condition

// 14. Explain the difference between some and every

// some  - returns true if at least one element satisfy the given condition
// every - returns true if all elements satisfy the given condition
