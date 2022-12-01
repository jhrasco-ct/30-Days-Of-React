import AsyncImg from "../shared/components/AsyncImg";
import "../styles/CountryCard.css";

const CountryCard = ({ country }) => {
  const languages = country.languages
    ?.map((language) => language.name)
    .join(", ");

  const currencies = country.currencies
    ?.map((currency) => currency.name)
    .join(", ");

  return (
    <div className="country">
      <div className="country_flag">
        <AsyncImg src={country.flags.svg} alt={country.name} />
      </div>
      <h3 className="country_name">{country.name.toUpperCase()}</h3>
      <div className="country_text">
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
        <p>
          <span>Languages: </span>
          {languages}
        </p>
        <p>
          <span>Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currencies}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
