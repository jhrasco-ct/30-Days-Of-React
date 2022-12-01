import CountryCard from "./CountryCard";
import "../styles/Countries.css";

const Countries = ({ countries }) => (
  <div className="countries-wrapper">
    {countries?.map((country) => (
      <CountryCard key={country.alpha2Code} country={country} />
    ))}
  </div>
);

export default Countries;
