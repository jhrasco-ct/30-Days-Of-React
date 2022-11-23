import Input from "./components/Input";
import "./styles/App.css";

const inputWithType = (Component, type) => {
  return (props) => {
    return <Component {...props} type={type} />;
  };
};

const TextInput = inputWithType(Input, "text");
const EmailInput = inputWithType(Input, "email");
const PasswordInput = inputWithType(Input, "password");

const App = () => {
  return (
    <div className="container">
      <TextInput placeholder="Text" />
      <EmailInput placeholder="Email" />
      <PasswordInput placeholder="Password" />
    </div>
  );
};

export default App;
