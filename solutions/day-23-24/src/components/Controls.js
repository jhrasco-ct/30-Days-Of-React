import "../styles/Controls.css";

const Controls = ({ onSearchTextChange }) => (
  <div className="controls">
    <input
      className="search-input"
      type="text"
      placeholder="Search countries by name, city and languages"
      onChange={onSearchTextChange}
    />
    <a href="#stat">
      <div className="chart-icon">📊</div>
    </a>
  </div>
);

export default Controls;
