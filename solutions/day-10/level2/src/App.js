import { useState } from "react";

import Main from "./components/Main";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import asabenehImage from "./assets/images/asabeneh.jpg";
import "./styles/App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };

  const handleTime = () => {
    alert(showDate(new Date()));
  };

  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  const changeBackground = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-content");
    } else {
      document.body.classList.remove("dark-content");
    }
  };

  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 7, 2020",
  };
  const techs = ["HTML", "CSS", "JavaScript"];

  const user = { ...data.author, image: asabenehImage };

  return (
    <div className="app">
      <Header data={data} isDarkMode={isDarkMode} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        isDarkMode={isDarkMode}
      />
      <Footer date={new Date()} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
