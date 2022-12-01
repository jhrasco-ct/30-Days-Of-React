const TechList = ({ techs }) => {
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

export default TechList;
