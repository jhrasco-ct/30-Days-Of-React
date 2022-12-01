import "../styles/GraphRow.css";

const GraphRow = ({ name, value, percentage }) => (
  <div className="bars">
    <div>{name}</div>
    <div className="bar" style={{ width: `${percentage}%` }}></div>
    <div>{value.toLocaleString()}</div>
  </div>
);

export default GraphRow;
