// 1. What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.
// Yes, I am happy.

// 2. What is state in React?
// State is an object in react which let the component re-render when state data changes.

// 3. What is the difference between props and state in React?
// • Props allow you to pass data from one component to other components as an argument.
//   State holds information about the components.
// • Props are used to communicate between components.
//   States can be used for rendering dynamic changes with the component.

// 4. How do you access state in a React component?
// State can be accessed by using the "state" keyword.
class App extends React.Component {
 state = {
    count: 0
  }

  render() {
    const count = this.state.count // accessing the state value
    return <div>{count}</div>
  }
}

// 5. How do you set a set in a React component?
class App extends React.Component {
 state = {
    count: 0,
  }

  render() {
  	this.setState({ count: this.state.count + 1 }) // setting the state
    const count = this.state.count
    return <div>{count}</div>
  }
}