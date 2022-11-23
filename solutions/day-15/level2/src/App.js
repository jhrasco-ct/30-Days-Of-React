import { Component } from "react";
import classNames from "classnames";

import { Validator } from "./Validator";
import "./App.css";

const options = [
  {
    value: "",
    label: "-- Select Country --",
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
  <option value={value}> {label}</option>
));

class App extends Component {
  // declaring state
  state = {
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

  handleChange = (e) => {
    /*
    // we can get the name and value like this but we can also destructure it from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target;
    // [variablename] this we can make a value stored in a certain variable could be a key for an object, in this case a key for the state

    if (type === "checkbox") {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === "file") {
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleBlur = (e) => {
    const { name } = e.target;
    this.setState({ touched: { ...this.state.touched, [name]: true } });
  };

  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {};

    if (
      this.state.touched.firstName &&
      Validator.firstNameError(this.state.firstName)
    ) {
      errors.firstName = Validator.firstNameError(this.state.firstName);
    }

    if (
      this.state.touched.lastName &&
      Validator.firstNameError(this.state.lastName)
    ) {
      errors.lastName = Validator.firstNameError(this.state.lastName);
    }

    if (this.state.touched.email && Validator.emailError(this.state.email)) {
      errors.email = Validator.emailError(this.state.email);
    }

    if (this.state.touched.tel && Validator.phoneError(this.state.tel)) {
      errors.tel = Validator.phoneError(this.state.tel);
    }

    if (
      this.state.touched.dateOfBirth &&
      Validator.dateError(this.state.dateOfBirth)
    ) {
      errors.dateOfBirth = Validator.dateError(this.state.dateOfBirth);
    }

    if (this.state.touched.weight && Validator.weightError(this.state.weight)) {
      errors.weight = Validator.weightError(this.state.weight);
    }

    if (
      this.state.touched.country &&
      Validator.countryError(this.state.country)
    ) {
      errors.country = Validator.countryError(this.state.country);
    }

    if (this.state.touched.bio && Validator.bioError(this.state.bio)) {
      errors.bio = Validator.bioError(this.state.bio);
    }

    return errors;
  };

  handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state;

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
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    };
    console.log(data);
  };

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      country,
      bio,
    } = this.validate();

    return (
      <div className="app">
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="First Name"
              />
              <small
                className={classNames("error-text", { "no-error": !firstName })}
              >
                {firstName}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name </label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="Last Name"
              />
              <small
                className={classNames("error-text", { "no-error": !lastName })}
              >
                {lastName}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="Email"
              />
              <small
                className={classNames("error-text", { "no-error": !email })}
              >
                {email}
              </small>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tel">Telephone </label>
            <input
              type="tel"
              name="tel"
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Tel"
            />
            <small className={classNames("error-text", { "no-error": !tel })}>
              {tel}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of birth </label>
            <input
              type="date"
              name="dateOfBirth"
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Date of Birth"
            />
            <small
              className={classNames("error-text", { "no-error": !dateOfBirth })}
            >
              {dateOfBirth}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="favoriteColor">Favorite Color</label>
            <input
              type="color"
              id="favoriteColor"
              name="favoriteColor"
              value={this.state.favoriteColor}
              onChange={this.handleChange}
              placeholder="Favorite Color"
            />
          </div>

          <div className="form-group">
            <label htmlFor="weight">Weight </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={this.state.weight}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Weight in Kg"
            />
            <small
              className={classNames("error-text", { "no-error": !weight })}
            >
              {weight}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              id="country"
            >
              {selectOptions}
            </select>
            <small
              className={classNames("error-text", { "no-error": !country })}
            >
              {country}
            </small>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={this.handleChange}
                checked={this.state.gender === "Female"}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                onChange={this.handleChange}
                checked={this.state.gender === "Male"}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                id="other"
                type="radio"
                name="gender"
                value="Other"
                onChange={this.handleChange}
                checked={this.state.gender === "Other"}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          <div className="form-group">
            <label>Select your skills</label>
            <div>
              <input
                type="checkbox"
                id="html"
                name="html"
                onChange={this.handleChange}
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="css"
                name="css"
                onChange={this.handleChange}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="javascript"
                name="javascript"
                onChange={this.handleChange}
              />
              <label htmlFor="javascript">JavaScript</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              cols="120"
              rows="10"
              placeholder="Write about yourself ..."
            />
            <small className={classNames("error-text", { "no-error": !bio })}>
              {bio}
            </small>
          </div>

          <div className="form-group">
            <input type="file" name="file" onChange={this.handleChange} />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
