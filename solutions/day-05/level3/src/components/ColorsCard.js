import React from "react";
import "../css/ColorsCard.css";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Row = () => {
  const color = hexaColor();
  return (
    <div className="row-color" style={{ backgroundColor: color }}>
      <p>{color}</p>
    </div>
  );
};

const ColorsCard = () => {
  return (
    <div className="colors-card-container">
      {[...Array(5).keys()].map(() => (
        <Row />
      ))}
    </div>
  );
};

export default ColorsCard;
