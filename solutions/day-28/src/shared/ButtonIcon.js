import "../styles/ButtonIcon.css";

const ButtonIcon = ({ className, onClick }) => (
  <button className="button-wrapper" onClick={onClick}>
    <i className={className} />
  </button>
);

export default ButtonIcon;
