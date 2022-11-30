import UserCard from "./components/UserCard";

function App() {
  const user = {
    name: "Asabeneh Yetayeh",
    position: "Senior Developer, Finland",
    skills: [
      "HTML",
      "CSS",
      "Sass",
      "JS",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "Flask",
      "Django",
      "NumPy",
      "Pandas",
      "Data Analysis",
      "MySQL",
      "GraphQL",
      "D3.js",
      "Gatsby",
      "Docker",
      "Heroku",
      "Git",
    ],
    dateJoined: "Aug 30, 2020",
  };

  return <UserCard user={user} />;
}

export default App;
