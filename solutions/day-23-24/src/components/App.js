import { useEffect, useState } from "react";

import Header from "../header/Header.js";
import Controls from "./Controls.js";
import Countries from "./Countries.js";
import useFetch from "../shared/hooks/useFetch.js";
import Graph from "./Graph.js";

import "../styles/App.css";

function App() {
  const allCountries = useFetch("https://restcountries.com/v2/all");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const filterCountries = (searchText) => {
    const countries = allCountries.filter((country) => {
      const languages = country.languages
        ?.map((language) => language.name)
        .join(" ");

      return (
        country.name.toLowerCase().includes(searchText) ||
        country.capital?.toLowerCase().includes(searchText) ||
        languages.toLowerCase().includes(searchText)
      );
    });
    setFilteredCountries(countries);
  };

  useEffect(() => {
    setFilteredCountries(allCountries);
  }, [allCountries]);

  const onSearchTextChange = (event) => {
    const searchText = event.target.value;
    filterCountries(searchText);
  };

  return (
    <div className="app">
      <Header countryCount={allCountries.length} />
      <Controls onSearchTextChange={onSearchTextChange} />
      <Countries countries={filteredCountries} />
      <Graph />
    </div>
  );
}

export default App;
