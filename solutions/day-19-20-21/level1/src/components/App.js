import { useEffect, useState } from "react";
import axios from "axios";

import CatCard from "./CatCard";
import "../styles/App.css";

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("https://api.thecatapi.com/v1/breeds", { signal: controller.signal })
      .then((response) => {
        setCats(response.data);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="app">
      {cats?.map((cat) => (
        <CatCard cat={cat} />
      ))}
    </div>
  );
};

export default App;
