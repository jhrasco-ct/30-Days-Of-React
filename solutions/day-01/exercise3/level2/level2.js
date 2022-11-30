// 1. Find the person who has many skills in the users object.
let skillfulUser;

for (const key in users) {
  const user = users[key];
  if (!skillfulUser) {
    skillfulUser = user;
  } else if (user.skills.length > skillfulUser.skills.length) {
    skillfulUser = user;
  }
}

console.log(skillfulUser);

// 2.1. Count logged in users
const values = Object.values(users);

const loggedInUserCount = values.reduce(
  (count, user) => (user.isLoggedIn ? count + 1 : count),
  0
);

console.log(loggedInUserCount);

// 2.2. Count users having greater than equal to 50 points
const userWith50PointsCount = values.reduce(
  (count, user) => (user.points >= 50 ? count + 1 : count),
  0
);

console.log(userWith50PointsCount);

// 3. Find people who are MERN stack developer from the users object
let mernDevelopers = [];

for (const key in users) {
  const user = users[key];
  const skills = user.skills.map((skill) => skill.toLowerCase());
  if (
    skills.includes("mongodb") &&
    skills.includes("express") &&
    skills.includes("react") &&
    skills.includes("node")
  ) {
    mernDevelopers.push(user);
  }
}

console.log(mernDevelopers);

// 4. Set your name in the users object without modifying the original users object
const usersCopy = Object.assign({}, users);
usersCopy.Harold = {
  email: "harold@mail.com",
  skills: ["iOS", "JavaScript"],
  age: 29,
  isLoggedIn: false,
  points: 69,
};

console.log(usersCopy);

// 5. Get all keys or properties of users object
const entries = Object.entries(users);
console.log(entries);

// 6. Get all the values of users object
console.log(values);
