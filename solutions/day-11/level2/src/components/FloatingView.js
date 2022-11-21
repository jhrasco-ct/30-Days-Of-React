const FloatingView = ({ style, onMouseEnter, reference }) => {
  return (
    <div
      className="floating-div"
      ref={reference}
      style={style}
      onMouseEnter={onMouseEnter}
    >
      <p>30 Days Of React</p>
    </div>
  );
};

export default FloatingView;
