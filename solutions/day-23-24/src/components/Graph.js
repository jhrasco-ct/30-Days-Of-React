import { useState } from "react";
import GraphContent from "./GraphContent";

import { populationData } from "../data/populationData.js";
import { languageData } from "../data/countries.js";
import "../styles/Graph.css";

const GraphType = Object.freeze({
  Population: Symbol("population"),
  Language: Symbol("language"),
});

const graphTitle = (type) => {
  switch (type) {
    case GraphType.Population:
      return "10 Most populated countries in the world";
    case GraphType.Language:
      return "10 Most spoken languages in the world";
    default:
      return null;
  }
};

const graphData = (type) => {
  switch (type) {
    case GraphType.Population:
      return populationData();
    case GraphType.Language:
      return languageData().slice(0, 10);
    default:
      return null;
  }
};

const Graph = ({ data }) => {
  const [selectedGraphType, setSelectedGraphType] = useState(
    GraphType.Population
  );

  return (
    <div className="graph-wrapper" id="stat">
      <div className="graph-buttons">
        <button
          className="population"
          onClick={() => {
            setSelectedGraphType(GraphType.Population);
          }}
        >
          Population
        </button>
        <button
          className="languages"
          onClick={() => {
            setSelectedGraphType(GraphType.Language);
          }}
        >
          Languages
        </button>
      </div>
      <h4 className="graph-title">{graphTitle(selectedGraphType)}</h4>
      <GraphContent data={graphData(selectedGraphType)} />
    </div>
  );
};

export default Graph;
