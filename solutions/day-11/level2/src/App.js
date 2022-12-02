import { useRef, useState } from "react";
import FloatingView from "./components/FloatingView";
import "./styles/App.css";

const App = () => {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const containerRef = useRef();
  const floatingViewRef = useRef();

  const getRandomInt = (max, min = 0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleMouseEnter = () => {
    const container = containerRef.current;
    const floatingView = floatingViewRef.current;

    const x = getRandomInt(container.clientWidth - floatingView.clientWidth);
    const y = getRandomInt(container.clientHeight - floatingView.clientHeight);
    setCoordinate({ x: x, y: y });
  };

  return (
    <div className="container" ref={containerRef}>
      <FloatingView
        reference={floatingViewRef}
        onMouseEnter={handleMouseEnter}
        style={{ marginLeft: coordinate.x, top: coordinate.y }}
      />
    </div>
  );
};

export default App;
