import { NavLink } from "react-router-dom";

import "../styles/NavigationBar.css";

const NavigationItem = ({ path, title }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      isActive ? "navigation-item-selected" : "navigation-item"
    }
  >
    {title}
  </NavLink>
);

const NavigationBar = () => (
  <div className="navigation-bar">
    <NavigationItem path="/" title="Home" />
    <NavigationItem path="experiences" title="Experiences" />
    <NavigationItem path="contact" title="Contact" />
  </div>
);

export default NavigationBar;
