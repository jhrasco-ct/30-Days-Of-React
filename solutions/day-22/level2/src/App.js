import { useState } from "react";

import { Validator } from "./Validator";
import "./App.css";

const options = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];

// mapping the options to list(array) of JSX options
const selectOptions = options.map(({ value, label }) => (
  <option key={label} value={value}>
    {" "}
    {label}
  </option>
));

const App = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      tel: false,
      dateOfBirth: false,
      weight: false,
      country: false,
      bio: false,
    },
  };

  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    /*
     we can get the name and value like: e.target.name, e.target.value
    Wwe can also destructure name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target;
    /*
    [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    */
    if (type === "checkbox") {
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = (e) => {
    /*
     e.preventDefault()
     stops the default behavior of form element
     specifically refreshing of page
    */
    e.preventDefault();
    const {
      firstName,
      lastName,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = formData;

    const formattedSkills = [];

    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }

    const data = {
      firstName,
      lastName,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    };
    /*
     the is the place where we connect backend api
     to send the data to the database
     */
    console.log(data);
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      touched: { ...formData.touched, [name]: true },
    });
  };

  const validate = () => {
    // Object to collect error feedback and to display on the form
    // Object to collect error feedback and to display on the form
    const errors = {};

    if (
      formData.touched.firstName &&
      Validator.firstNameError(formData.firstName)
    ) {
      errors.firstName = Validator.firstNameError(formData.firstName);
    }

    if (
      formData.touched.lastName &&
      Validator.firstNameError(formData.lastName)
    ) {
      errors.lastName = Validator.firstNameError(formData.lastName);
    }

    if (formData.touched.email && Validator.emailError(formData.email)) {
      errors.email = Validator.emailError(formData.email);
    }

    if (formData.touched.tel && Validator.phoneError(formData.tel)) {
      errors.tel = Validator.phoneError(formData.tel);
    }

    if (
      formData.touched.dateOfBirth &&
      Validator.dateError(formData.dateOfBirth)
    ) {
      errors.dateOfBirth = Validator.dateError(formData.dateOfBirth);
    }

    if (formData.touched.weight && Validator.weightError(formData.weight)) {
      errors.weight = Validator.weightError(formData.weight);
    }

    if (formData.touched.country && Validator.countryError(formData.country)) {
      errors.country = Validator.countryError(formData.country);
    }

    if (formData.touched.bio && Validator.bioError(formData.bio)) {
      errors.bio = Validator.bioError(formData.bio);
    }

    return errors;
  };

  // accessing the state value by destrutcturing the state
  const {
    firstName,
    lastName,
    country,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    bio,
  } = formData;

  const errors = validate();

  return (
    <div className="app">
      <h3>Add Student</h3>
      <form onSubmit={onSubmit} noValidate>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="First Name"
            />{" "}
            {errors.firstName && <small>{errors.firstName}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Last Name"
            />
            {errors.lastName && <small>{errors.lastName}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Email"
            />
            {errors.email && <small>{errors.email}</small>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telephone </label>
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Tel"
          />
          {errors.tel && <small>{errors.tel}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth </label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Date of Birth"
          />
          {errors.dateOfBirth && <small>{errors.dateOfBirth}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color</label>
          <input
            type="color"
            id="favoriteColor"
            name="favoriteColor"
            value={favoriteColor}
            onChange={onChange}
            placeholder="Favorite Color"
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Weight in Kg"
          />
          {errors.weight && <small>{errors.weight}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            onChange={onChange}
            onBlur={onBlur}
            id="country"
            value={country}
          >
            {selectOptions}
          </select>
          {errors.country && <small>{errors.country}</small>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={onChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={onChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={onChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="form-group">
          <label>Select your skills</label>
          <div>
            <input type="checkbox" id="html" name="html" onChange={onChange} />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" id="css" name="css" onChange={onChange} />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={onChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={onChange}
            onBlur={onBlur}
            cols="120"
            rows="10"
            placeholder="Write about yourself ..."
          />
          {errors.bio && <small>{errors.bio}</small>}
        </div>

        <div className="form-group">
          <input type="file" name="file" onChange={onChange} />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
