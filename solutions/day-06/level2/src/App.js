import Header from "./components/Header";
import NumberGrid from "./components/NumberGrid";
import ColorGrid from "./components/ColorGrid";

import "./css/index.css";

function App() {
  return (
    <div className="main">
      <Header subtitle="Number Generator" />
      <NumberGrid />
      <Header subtitle="Hexadecimal Colors" />
      <ColorGrid />
    </div>
  );
}

export default App;
