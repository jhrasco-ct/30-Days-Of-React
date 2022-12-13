import { useState } from "react";
import "../styles/ColorCell.css";

const ColorCell = ({ hexColor }) => {
  const [copyClassName, setCopyClassName] = useState("copy");

  const onCopy = () => {
    navigator.clipboard.writeText(hexColor);
    setCopyClassName("copied");
    setTimeout(() => {
      setCopyClassName("copy");
    }, 2000);
  };

  return (
    <div className="color-cell" style={{ backgroundColor: hexColor }}>
      <small>{hexColor}</small>
      <div className={`wrapper_copy ${copyClassName}`}>
        <button onClick={onCopy}>
          <i className="fa fa-copy"></i>
        </button>
      </div>
    </div>
  );
};

export default ColorCell;
