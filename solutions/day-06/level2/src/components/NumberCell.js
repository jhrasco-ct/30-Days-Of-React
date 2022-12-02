const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const NumberCell = ({ number }) => {
  let className = "cell-odd";
  if (isPrime(number)) {
    className = "cell-prime";
  } else if (number % 2 === 0) {
    className = "cell-even";
  }
  return (
    <div className={className}>
      <div className="cell-text">{number}</div>
    </div>
  );
};

export default NumberCell;
