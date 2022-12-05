import { useRef } from "react";
import "../styles/Controls.css";

const Controls = ({ onGenerate }) => {
  const inputRef = useRef();

  const onKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className="control">
      <div className="form-group">
        <input type="text" ref={inputRef} onKeyPress={onKeyPress} />
      </div>
      <button
        onClick={() => {
          onGenerate(inputRef.current.value);
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default Controls;
