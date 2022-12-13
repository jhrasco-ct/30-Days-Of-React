import { useState } from "react";

import Header from "./header/Header";
import Controls from "./Controls";
import ColorList from "./ColorList";
import "../styles/App.css";

function App() {
  const [numberOfColors, setNumberOfColors] = useState(28);

  return (
    <div className="app">
      <Header />
      <Controls onGenerate={setNumberOfColors} />
      <ColorList numberOfColors={numberOfColors} />
    </div>
  );
}

export default App;
