import { Component } from "react";
import { tenHighestPopulation } from "../data/data";
import Row from "./Row";

class Graph extends Component {
  worldPopulation() {
    return tenHighestPopulation[0].population;
  }
  
  render() {
    return (
      <div>
        {tenHighestPopulation.map((data) => (
          <Row
            countryName={data.country}
            populationCount={data.population}
            percentage={(data.population / this.worldPopulation()) * 100}
          />
        ))}
      </div>
    );
  }
}

export default Graph;
