const Footer = ({ isDarkMode, date }) => {
  return (
    <footer className={isDarkMode && "dark-content"}>
      <div className="footer-wrapper">
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
