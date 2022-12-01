import "../styles/Header.css";

const Header = ({ countryCount }) => (
  <header className="country-header">
    <h2>World Countries Data</h2>
    <p className="subtitle">Currently, we have {countryCount} countries</p>
  </header>
);

export default Header;
