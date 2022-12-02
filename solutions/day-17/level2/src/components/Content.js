import { Outlet } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import "../styles/Content.css";

const Content = () => (
  <div className="main-content">
    <NavigationBar />
    <Outlet />
  </div>
);

export default Content;
