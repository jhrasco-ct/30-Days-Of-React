import { useEffect } from "react";
import "./App.css";

function App() {
  const updateBackground = () => {
    const date = new Date();

    const month = date.getMonth() + 1;

    if ([12, 1, 2].includes(month)) {
      document.body.classList.add("winter");
    } else if ([3, 4, 5].includes(month)) {
      document.body.classList.add("spring");
    } else if ([6, 7, 8].includes(month)) {
      document.body.classList.add("summer");
    } else if ([9, 10, 11].includes(month)) {
      document.body.classList.add("autumn");
    }
  };

  useEffect(() => {
    updateBackground();
  }, []);

  return <></>;
}

export default App;
