import { useRef, useState } from "react";
import "../styles/Form.css";

const Form = ({ onPost }) => {
  const maxCharacterCount = 250;
  const [characterCount, setCharacterCount] = useState(maxCharacterCount);
  const textareaRef = useRef();

  const onKeyPress = (event) => {
    if (characterCount <= 0) {
      event.preventDefault();
    }
  };

  const onChangeText = (event) => {
    const text = event.target.value;
    const remaining = maxCharacterCount - text.length;
    setCharacterCount(remaining);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onButtonClick = () => {
    const text = textareaRef.current.value;
    setCharacterCount(maxCharacterCount);
    textareaRef.current.value = "";
    onPost(text);
  };

  const isButtonEnabled = characterCount < maxCharacterCount;
  const buttonClass = isButtonEnabled ? "activeButton" : "disabledButton";

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit}>
        <div>
          <div className="form-group">
            <textarea
              ref={textareaRef}
              name="Post"
              placeholder="Tweet about 30 Days of React..."
              cols={90}
              rows={10}
              onChange={onChangeText}
              onKeyPress={onKeyPress}
            />
          </div>
          <p className="other">{characterCount}</p>
        </div>
        <div>
          <button
            className={buttonClass}
            onClick={onButtonClick}
            disabled={!isButtonEnabled}
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
