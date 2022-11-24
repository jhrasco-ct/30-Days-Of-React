import { profileData } from "../data/data";
import "../styles/Experiences.css";

const Experiences = () => {
  return (
    <div className="experiences-content">
      <div className="experience-title">Experiences</div>
      {profileData.experiences.map((experience) => (
        <div className="company-row">
          <div className="company">{experience.company}</div>
          <div className="role">{experience.role}</div>
          <div className="date">{experience.date}</div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
