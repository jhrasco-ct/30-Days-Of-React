import Header from "./components/Header";
import Graph from "./components/Graph";
import "./css/index.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Graph />
      </div>
    );
  }
}

export default App;
