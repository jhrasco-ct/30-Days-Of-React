// 1. What is a controlled input?
// With a controlled input, the value that the input displays is explicitly controlled.
// The code has to be written to respond to keypresses, store the current value somewhere, and pass that value back to the input to be displayed.

// 2. What is an uncontrolled input?
// To write an uncontrolled component, instead of writing an event handler for every state update.
// In uncontrolled input we get data from input fields like traditional HTML form data handling.

// 3. How do you get a content of a certain HTML element in React?
// A "ref" can be used to get form values from the DOM

// 4. Why it is not a good idea to touch the DOM directly in React?
// Because React has its own way of handling the DOM manipulation

// 5. What is most frequently used in React? Controlled or Uncontrolled input?
// Most of the time we use controlled input instead of uncontrolled input.

// 6. What do you need to write uncontrolled input?
// A "ref" is needed to write uncontrolled input

// 7. Does state require to write uncontrolled input?
// No, only the "ref"

// 8. When do you use uncontrolled input?
// Uncontrolled inputs are the best choice when you only need to do something with the value
// at a specific time,such as when the form is submitted.

// 9. When do you use controlled input?
// - Instantly validating the form on every keypress:
//   useful if you want to keep the Submit button disabled until everything is valid, for instance.
// - Handling formatted input, like a credit card number field, or preventing certain characters from being typed.
// - Keeping multiple inputs in sync with each other when they’re based on the same data

// 10. Do you use a controlled or uncontrolled input to validate form input fields?
// Controlled input. As per the React docs, the React team recommends using controlled components to implement forms.
