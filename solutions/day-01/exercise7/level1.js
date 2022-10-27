// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  makeSound() {
    console.log("");
  }
}

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {}

class Cat extends Animal {}
