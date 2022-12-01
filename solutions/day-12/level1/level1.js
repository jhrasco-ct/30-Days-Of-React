// 1. What is the importance of form?
// Form is used to collect data from a user.
// Once in a while we use form to fill our information on a paper or on a website.

// 2. How many input types do you know?
// 22, as per the provided example

// 3. Mention at least four attributes of an input element
// value, name, id, placeholder

// 4. What is the importance of htmlFor?
// htmlFor is used to link a label and an input field.
// If label and input are linked it will focus the input when we click on label

// 5. Write an input type which is not given in the example if there is?
// Looks like all the input types were listed in the example

// 6. What is a controlled input?
// With a controlled input, the value that the input displays is explicitly controlled.
// The code has to be written to respond to keypresses, store the current value somewhere, and pass that value back to the input to be displayed.

// 7. What do you need to write a controlled input?
// A state to store the input value and the onChange handler to notify for any changes in the input.

// 8. What event type do you use to listen changes on an input field?
// onChange

// 9. What is the value of a checked checkbox?
// Boolean

// 10. When do you use onChange, onBlur, onSubmit?
// - onChange is triggered when an element changes its value
// - onBlur is triggered when an object loses focus
// - onSubmit is triggered when athe form is submitted

// 11. What is the purpose of writing e.preventDefault() inside the submit handler method?
// It stops the default behavior of form element specifically refreshing of page.

// 12. How do you bind data in React? The first input field example is data binding in React.
// By using a state to store and display the input value and onChange to update the state.
// Example:
handleChange = (e) => {
  this.setState({ firstName: e.target.value });
};

<input
  type="text"
  name="firstName"
  value={this.state.firstName}
  onChange={this.handleChange}
  placeholder="First Name"
/>;

// 13. What is validation?
// The action or process of checking or proving the validity or accuracy of something in this case data.

// 14. What is the event type you use to listen when an input changes?
// onChange

// 15. What are event types do you use to validate an input?
// onBlur, onChange, or onSubmit can be used, depending on the requirement
