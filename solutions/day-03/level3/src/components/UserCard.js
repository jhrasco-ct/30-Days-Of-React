import asabeneh from "../images/asabeneh.jpg";
import check from "../images/check.png";
import clock from "../images/clock.png";

import "../css/UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="container">
      <img className="profile-image" src={asabeneh} alt="Asabeneh" />
      <div className="name-image-container">
        <h2>{user.name.toUpperCase()}</h2>
        <img className="check" src={check} alt="Verified Check" />
      </div>
      <p className="position">{user.position}</p>
      <h2>SKILLS</h2>
      <div className="skills">
        {user.skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
      <div className="name-image-container">
        <img className="clock" src={clock} alt="Clock" />
        <p>{`Joined on ${user.dateJoined}`}</p>
      </div>
    </div>
  );
};

export default UserCard;
