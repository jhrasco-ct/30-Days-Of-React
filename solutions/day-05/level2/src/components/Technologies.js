import htmlLogo from "../images/html_logo.png";
import cssLogo from "../images/css_logo.png";
import jsLogo from "../images/js_logo.png";
import reactLogo from "../images/react_logo.png";
import "../css/Technologies.css";

const Technologies = () => {
  return (
    <div className="imageContainer">
      <p className="title">Front End Technologies</p>
      <div className="icons">
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={jsLogo} alt="JavaScript" />
        <img src={reactLogo} alt="React" />
      </div>
    </div>
  );
};

export default Technologies;
