import { Component } from "react";

class Row extends Component {
  render() {
    const { countryName, populationCount, percentage } = this.props;
    return (
      <div className="row">
        <div className="country-name">{countryName.toUpperCase()}</div>
        <div className="bar">
          <div className="fill" style={{ width: `${percentage}%` }} />
        </div>
        <div className="population">{populationCount.toLocaleString()}</div>
      </div>
    );
  }
}

export default Row;
