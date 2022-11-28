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
      controller.abort();
    };
  }, []);

  const getCountryCount = (cats) => {
    const countries = cats.map((cat) => cat.country_code);
    const uniqueCountries = [...new Set(countries)];
    return uniqueCountries.length;
  };

  const getCountryAndBreedsData = (cats) => {
    const data = {};

    cats.forEach((cat) => {
      data[cat.origin] = (data[cat.origin] ?? 0) + 1;
    });

    const array = Object.keys(data).map((key) => {
      return {
        country: key,
        breedCount: data[key],
      };
    });

    return array;
  };

  const getCountryWithHighestCatBreeds = (cats) => {
    const data = getCountryAndBreedsData(cats);

    let countryName;
    let max = 0;

    data.forEach(({ country, breedCount }) => {
      if (breedCount > max) {
        countryName = country;
        max = breedCount;
      }
    });

    return countryName;
  };

  const tableData = () => {
    const data = getCountryAndBreedsData(cats);

    const sortedData = data.sort((data1, data2) => {
      console.log(data1);
      if (data1.breedCount > data2.breedCount) {
        return 1;
      } else if (data1.breedCount === data2.breedCount) {
        if (data1.country > data2.country) {
          return 1;
        }
      }
      return -1;
    });

    return sortedData.map(({ country, breedCount }) => (
      <tr key={country}>
        <td>{country}</td>
        <td>{breedCount}</td>
      </tr>
    ));
  };

  return (
    <div className="app">
      <h1>30 Days Of React</h1>
      <h2>Cats Paradise</h2>
      {cats.length > 0 && (
        <div>
          <p>
            There are <b>{getCountryCount(cats)}</b> countries with cat breeds.
          </p>
          <p>
            <b>{getCountryWithHighestCatBreeds(cats)}</b> has the highest number
            of cat breeds.
          </p>
          <table>
            <tr>
              <th>Country</th>
              <th>No. of Breeds</th>
            </tr>
            {tableData()}
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
