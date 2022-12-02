// index.js
import React from "react";
import ReactDOM from "react-dom";
import { countriesData } from "./data/countries";

// A button component
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

// class based component
class Header extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// Country Card
class CountryCard extends React.Component {
  render() {
    const { country } = this.props;
    return (
      <div className="country-card">
        <img className="flag" src={country.flag} alt="" />
        <div className="country-name">{country.name.toUpperCase()}</div>
        <div className="country-info">
          <div>
            <span>Capital: </span>
            {country.capital}
          </div>
          <div>
            {country.languages.length > 0 ? (
              <span>Languages: </span>
            ) : (
              <span>Language: </span>
            )}
            {country.languages.join(", ")}
          </div>
          <div>
            <span>Population: </span>
            {country.population.toLocaleString()}
          </div>
          <div>
            <span>Currency: </span>
            {country.currency}
          </div>
        </div>
      </div>
    );
  }
}

// Main Component
// Class Component

const randomInt = (max, min = 0) => parseInt(Math.random() * (max - min) + min);

class Main extends React.Component {
  state = {
    country: this.props.countries[0],
  };

  componentDidMount() {
    this.randomizeCountry();
  }

  randomizeCountry = () => {
    const countries = this.props.countries;
    const country = countries[randomInt(countries.length)];
    this.setState({ country: country });
  };

  render() {
    return (
      <main>
        <div className="main-wrapper">
          <CountryCard country={this.state.country} />
          <Button text="Select Country" onClick={this.randomizeCountry} />
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const techs = ["HTML", "CSS", "JavaScript"];

    return (
      <div className="app">
        <div className="content-container">
          <Header data={data} />
          <Main techs={techs} countries={countriesData} />
        </div>
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
