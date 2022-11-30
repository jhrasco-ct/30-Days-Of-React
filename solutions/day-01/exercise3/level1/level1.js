// 1. Create an empty object called dog
const dog = {};

// 2. Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
dog.name = "Hotdog";
dog.legs = 4;
dog.color = "Red";
dog.age = 2;
dog.bark = () => "woof woof";

// 4. Get name, legs, color, age and bark value from the dog object
const name = dog.name;
const legs = dog.legs;
const color = dog.color;
const age = dog.age;
const bark = dog.bark();

// 5. Set new properties to the dog object: breed, getDogInfo
dog.breed = "Aspin";

dog.getDogInfo = () =>
  `I am ${dog.name}. I am ${dog.age} years old. I have ${
    dog.legs
  } legs. My breed is ${dog.breed}. My color is ${dog.color}. ${dog.bark()}!!!`;

console.log(dog.getDogInfo());
