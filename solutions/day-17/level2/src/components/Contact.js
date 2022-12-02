import { profileData } from "../data/data";
import "../styles/Contact.css";

const Contact = () => (
  <div className="contact-content">
    <div className="contact-title">Contact</div>
    <div className="contact-details">
      <div>👨🏻‍💻 &nbsp; {profileData.contact.name}</div>
      <div>🏠 &nbsp; {profileData.contact.address}</div>
      <div>📧 &nbsp; {profileData.contact.email}</div>
      <div>📞 &nbsp; {profileData.contact.phone}</div>
    </div>
  </div>
);

export default Contact;
