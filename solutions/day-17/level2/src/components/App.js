import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content from "./Content";
import Home from "./Home";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Error from "./Error";

import "../styles/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => (
  <div className="app">
    <RouterProvider router={router} />
  </div>
);

export default App;
