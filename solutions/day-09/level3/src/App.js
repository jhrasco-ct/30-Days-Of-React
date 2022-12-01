import { useEffect, useState } from "react";
import Content from "./components/Content";
import LoadingSpinner from "./components/Spinner";
import "./css/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const fakeAPIFetch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fakeAPIFetch();
  }, []);

  return (
    <div className="main">{isLoading ? <LoadingSpinner /> : <Content />}</div>
  );
}

export default App;
