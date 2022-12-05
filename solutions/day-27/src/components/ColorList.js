import { useEffect, useState } from "react";

import ColorCell from "./ColorCell";
import "../styles/ColorList.css";

const ColorList = ({ numberOfColors }) => {
  const [hexColors, setHexColors] = useState([]);

  const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };

  useEffect(() => {
    const colors = [];
    for (let i = 0; i < numberOfColors; i++) {
      colors.push(hexaColor());
    }
    setHexColors(colors);
  }, [numberOfColors]);

  return (
    <div className="colors-wrapper">
      {hexColors?.map((hexColor) => (
        <ColorCell hexColor={hexColor} />
      ))}
    </div>
  );
};

export default ColorList;
