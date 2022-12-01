// 1. How do you write a pure JavaScript function
// A Pure Function is a function that always returns the same result if the same arguments are passed.
// It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
const computeTax = (price) => price * 0.2;

// 2. What is inheritance and how do you make a child from a parent class?
// Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.
// Use the "extends" syntax to inherit a parent class.
class Parent { }

class Child extends Parent { }

// 3. What is class based React component?
// Class based component is made using JavaScript class and it inherits from react Component.

// 4. What is the difference between functional React component and class based React component?
// Only class based components used to have state and life cycle methods prior to React 16.8.0. 

// 5. When do we need to use class based components instead of functional components?
// If inheritance is actually needed, a class-based component can be used instead of functional components.

// 6. What is the use cases of class based component?
// When a component needs to inherit all the functionality from a parent component.

// 7. Which type of component do use most frequently? functional or class-based component?
// Functional-based components. With the introduction of React Hooks, a functional component can do almost everything a class component can do.