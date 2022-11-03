// 1. What is props in a React component?
// Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.

// 2. How do you access props in a React component?
// React props is an object which you get instantly when you create a React component. See example below:
const Component = (props) => {
  console.log(props.name); // this is how the props can be accessed
};
<Component name="Header" />;

// 3. What data types can we pass as props to components?
// Props could be different data types. It could be a string, number, boolean, array, object or a function.

// 4. What is a propTypes?
// The propTypes package helps us to assign the data types of the props we passed to a component.

// 5. What is a default propTypes?
// The defaultProps can be used when we want to have some default prop types for a component.
