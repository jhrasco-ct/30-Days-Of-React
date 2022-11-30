import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className="inputs">
        <input placeholder="Firts name" type="text" />
        <input placeholder="Last name" type="text" />
        <input placeholder="Email" type="email" />
      </div>
      <div className="button-div">
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
