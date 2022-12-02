import harold from "../assets/images/harold.jpg";
import { profileData } from "../data/data";
import "../styles/Home.css";

const Home = () => (
  <div className="home-content">
    <div className="home-section">
      <img className="profile-image" src={harold} alt="Profile" />
      <div>
        <div className="greeting">{profileData.greeting}</div>
        <div className="greeting-name">{profileData.greetingName}</div>
        <div className="profession">{profileData.profession}</div>
      </div>
    </div>
    <div className="home-section">
      <div>
        <div className="summary-title">Summary</div>
        <div className="summary">{profileData.summary}</div>
      </div>
      <div>
        <div className="skills-content">
          {profileData.skills.map((skill) => (
            <div className="skill-badge">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
