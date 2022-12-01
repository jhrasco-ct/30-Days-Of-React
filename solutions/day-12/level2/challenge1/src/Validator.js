export const Validator = () => {};

Validator.firstNameError = (name) => {
  if (name.length < 2 || name.length > 12) {
    return "First name must be between 2 and 12";
  }
  return null;
};

Validator.lastNameError = (name) => {
  if (name.length < 2 || name.length > 12) {
    return "Last name must be between 2 and 12";
  }
  return null;
};

Validator.emailError = (email) => {
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "Email must be in a valid format";
  }
  return null;
};

Validator.phoneError = (phone) => {
  if (phone.length === 0) {
    return "Telephone must not be empty";
  } else if (phone.match(/^[0-9]+$/) == null) {
    return "Telephone must contain numbers only";
  }
  return null;
};

Validator.dateError = (date) => {
  if (date.length === 0) {
    return "Please select a date";
  }
  return null;
};

Validator.weightError = (weight) => {
  if (weight.length === 0) {
    return "Weight must not be empty";
  }
  return null;
};

Validator.countryError = (country) => {
  if (country.length === 0) {
    return "Country must be selected";
  }
  return null;
};

Validator.bioError = (bio) => {
  if (bio.length === 0) {
    return "Bio must not be empty";
  }
  return null;
};
