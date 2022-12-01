import GraphRow from "./GraphRow";
import "../styles/GraphContent.css";

const GraphContent = ({ data }) => (
  <div className="graphs">
    <div className="graph-wrapper">
      {data.map((element) => (
        <GraphRow
          key={element.name}
          name={element.name}
          value={element.value}
          percentage={element.percentage}
        />
      ))}
    </div>
  </div>
);

export default GraphContent;
