import NumberCell from "./NumberCell";

const NumberGrid = () => (
  <div className="grid">
    {[...Array(32).keys()].map((number) => (
      <NumberCell key={number} number={number} />
    ))}
  </div>
);

export default NumberGrid;
