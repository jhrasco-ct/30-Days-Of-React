const Row = ({ countryName, populationCount, percentage }) => {
  return (
    <div className="row">
      <div className="country-name">{countryName.toUpperCase()}</div>
      <div className="bar">
        <div className="fill" style={{ width: `${percentage}%` }} />
      </div>
      <div className="population">{populationCount.toLocaleString()}</div>
    </div>
  );
};

export default Row;
