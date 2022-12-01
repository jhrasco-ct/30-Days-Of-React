// 1. What is conditional rendering?
//  Conditional rendering is a way to render different JSX or component at different condition.

// 2. How do you implement conditional rendering?
// We can implement conditional rendering using regular if and else statement, ternary operator and &&.

// 3. Which method of conditional rendering do you prefer to use?
// • If there is only one condition, the condition has a fallback ouput, and the condition can be written in a single line,
//   I prefer to use the ternary operator.
//   e.g. isLoading ? <Loading /> : <Main />
// • If there is only one condition, the condition has no fallback ouput, and the condition can be written in a single line,
//   I prefer to use the && operator.
//   e.g. isLoading && <Loading />
// • If there are multiple conditions. I prefer to use the if-else statement.
