import { tenHighestPopulation } from "../data/data";
import Row from "./Row";

const Graph = () => {
  const worldPopulation = tenHighestPopulation[0].population;
  return (
    <div>
      {tenHighestPopulation.map((data) => (
        <Row
          countryName={data.country}
          populationCount={data.population}
          percentage={(data.population / worldPopulation) * 100}
        />
      ))}
    </div>
  );
};

export default Graph;
