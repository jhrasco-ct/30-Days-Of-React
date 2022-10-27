// Create a function called getPersonInfo.
// The getPersonInfo function takes an object parameter.
// The structure of the object and the output of the function is given below.
// Try to use both a regular way and destructuring and compare the cleanness of the code.

// Format: Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = (person) => {
  const fullName = `${person.firstName} ${person.lastName}`;
  const country = person.country;
  const age = person.age;
  const job = person.job;
  const skills = `${person.skills.slice(0, -1).join(", ")} and ${
    person.skills[person.skills.length - 1]
  }`;
  const languages = `${person.languages
    .slice(0, -1)
    .join(", ")} and a little bit of ${
    person.languages[person.languages.length - 1]
  }`;

  return `${fullName} lives in ${country}. He is ${age} years old. He is ${job}. He teaches ${skills} He speaks ${languages}`;
};

const getPersonInfUsingDestructuring = ({
  firstName,
  lastName,
  country,
  age,
  job,
  skills,
  languages,
}) => {
  const fullName = `${firstName} ${lastName}`;
  const skill = `${skills.slice(0, -1).join(", ")} and ${
    skills[skills.length - 1]
  }`;
  const language = `${languages.slice(0, -1).join(", ")} and a little bit of ${
    languages[languages.length - 1]
  }`;

  return `${fullName} lives in ${country}. He is ${age} years old. He is ${job}. He teaches ${skill} He speaks ${language}`;
};

console.log(getPersonInfUsingDestructuring(person));
