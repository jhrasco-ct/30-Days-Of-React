// 1. Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of expenses and its description.
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [
    {
      income: 6900,
      description: "Salary",
    },
    {
      income: 3090,
      description: "Sideline",
    },
  ],
  expenses: [
    {
      expense: 500,
      description: "GrabFood",
    },
    {
      expense: 600,
      description: "Coffee",
    },
  ],
  totalIncome: 9990,
  totalExpense: 1100,
  addIncome: 100,
  addExpense: 50,
  accountBalance: function () {
    return (
      this.totalIncome + this.addIncome - this.totalExpense - this.addExpense
    );
  },
};

// Questions: 2, 3 and 4 are based on the following two arrays: users and products
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 2. Imagine you are getting the above users collection from a MongoDB database.

// 2.1. Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.
const signUp = (newUser) => {
  const doesExist = users.some(
    (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
  );
  if (doesExist) {
    console.log("You have already an account.");
  } else {
    users.push(newUser);
  }
};

signUp({
  _id: "ghderc",
  username: "Thomas",
  email: "thomas@thomas.com",
  password: "123333",
  createdAt: "08/01/2020 10:00 AM",
  isLoggedIn: false,
});

// 2.2 Create a function called signIn which allows user to sign in to the application
const signIn = (user) => {
  const isValid = users.some(
    (storedUser) =>
      storedUser.email.toLowerCase() === user.email.toLowerCase() &&
      storedUser.password === user.password
  );
  if (isValid) {
    console.log("Sign-in successful.");
  } else {
    console.log("Invalid email or password!");
  }
};

signIn({
  email: "thomas@thomas.com",
  password: "123333",
});

// 3. The products array has three elements and each of them has six properties.

// 3.1 Create a function called rateProduct which rates the product
const rateProduct = (productId, userId, rating) => {
  const product = products.find((product) => product._id === productId);
  if (product) {
    product.ratings.push({ userId, rate: rating });
  }
};

rateProduct("eedfcf", "xnxx", 5);

// 3.2 Create a function called averageRating which calculate the average rating of a product
const averageRating = (productId) => {
  const product = products.find((product) => product._id === productId);
  if (product) {
    const ratings = product.ratings.map((rating) => rating.rate);
    const total = ratings.reduce((total, rating) => total + rating, 0);
    return total / ratings.length;
  } else {
    return 0;
  }
};

console.log(averageRating("eedfcf"));

// 4. Create a function called likeProduct.
// This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (productId, userId) => {
  const product = products.find((product) => product._id === productId);
  if (product) {
    const index = product.likes.indexOf(userId);
    if (index > -1) {
      product.likes.splice(index, 1);
    } else {
      product.likes.push(userId);
    }
  }
};

likeProduct("eedfcf", "fg12cy");
