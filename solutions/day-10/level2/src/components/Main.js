import Button from "./Button";
import TechList from "./TechList";
import UserCard from "./UserCard";

const Main = ({ techs, user, greetPeople, handleTime, changeBackground }) => {
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button text="Greet People" onClick={greetPeople} />
        <Button text="Show Time" onClick={handleTime} />
        <Button text="Change Background" onClick={changeBackground} />
      </div>
    </main>
  );
};

export default Main;
