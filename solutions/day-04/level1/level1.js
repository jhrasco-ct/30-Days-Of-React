// 1. What is the difference between a regular function and an arrow function?
// Arrow function is introduced in ES6. They differ in syntax, arguments binding, the use of "this" keyword, etc.

// 2. What is a React Component?
// A React component is a small, reusable code, which is responsible for one part of the application UI.

// 3. How do you make a React functional component?
// Convert the component into a function as shown below:
const ComponentName = () => <tag> Content </tag>;

// 4. What is the difference between a pure JavaScript function and a functional component?
// A functional component is a function that returns a component, i.e. JSX.

// 5. How small is a React component?
// A component that returns only a single HTML as JSX is considered as a small component.

// 6. Can we make a button or input field component?
// Yes. See example below:
const Input = () => <input placeholder="Placeholder" />;

// 7. Make a reusable Button component.
const Button = ({ style }) => <button style={style}>Button</button>;

// 8. Make a reusable InputField component.
const InputField = ({ style, type }) => <input style={style} type={type} />;

// 9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
const AlertBox = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);
// Usage:
<div>
  <AlertBox message={"Success"} />
  <AlertBox message={"Warning"} />
</div>;
