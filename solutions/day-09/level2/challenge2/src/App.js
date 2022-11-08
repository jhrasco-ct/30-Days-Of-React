import { useEffect } from "react";
import "./App.css";

function App() {
  const updateBackground = () => {
    const date = new Date();

    const hour = date.getHours();
    if (hour >= 6 && hour < 12) {
      // Morning - 6AM to 12PM
      document.body.classList.add("morning");
    } else if (hour >= 12 && hour < 18) {
      // Noon - 12AM to 6PM
      document.body.classList.add("noon");
    } else if (hour >= 17 && hour < 19) {
      // Evening - 5PM to 7PM
      document.body.classList.add("evening");
    } else {
      // Night
      document.body.classList.add("night");
    }
  };

  useEffect(() => {
    updateBackground();
  }, []);

  return <></>;
}

export default App;
