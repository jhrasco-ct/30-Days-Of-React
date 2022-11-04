const ColorCell = ({ hexColor }) => {
  return (
    <div className="cell-color" style={{ backgroundColor: hexColor }}>
      <div className="cell-text">{hexColor}</div>
    </div>
  );
};

export default ColorCell;
