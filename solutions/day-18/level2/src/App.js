import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("https://api.thecatapi.com/v1/breeds", { signal: controller.signal })
      .then((response) => {
        setCats(response.data);
      });

    return () => {
      // controller.abort();
    };
  }, []);

  const getAverageWeight = (cats) => {
    const totalAverage = cats.reduce((total, cat) => {
      const minMax = cat.weight.metric.split(" - ");
      const average = (parseInt(minMax[0]) + parseInt(minMax[1])) / 2;
      return total + average;
    }, 0);
    return parseFloat(totalAverage / cats.length).toFixed(2);
  };

  const getAverageLifeSpan = (cats) => {
    const totalAverage = cats.reduce((total, cat) => {
      const minMax = cat.life_span.split(" - ");
      const average = (parseInt(minMax[0]) + parseInt(minMax[1])) / 2;
      return total + average;
    }, 0);
    return parseFloat(totalAverage / cats.length).toFixed(2);
  };

  return (
    <div className="app">
      <h1>30 Days Of React</h1>
      <h2>Cats Paradise</h2>
      {cats.length > 0 && (
        <div>
          <p>There are {cats.length} cat breeds.</p>
          <p>
            On average, a cat can weight about <b>{getAverageWeight(cats)}</b>{" "}
            kg and live <b>{getAverageLifeSpan(cats)}</b> years.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
