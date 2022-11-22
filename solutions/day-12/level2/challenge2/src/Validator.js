import validator from "validator";

export const Validator = () => {};

Validator.firstNameError = (name) => {
  if (!validator.isByteLength(name, { min: 2, max: 12 })) {
    return "First name must be between 2 and 12";
  }
  return null;
};

Validator.lastNameError = (name) => {
  if (!validator.isByteLength(name, { min: 2, max: 12 })) {
    return "Last name must be between 2 and 12";
  }
  return null;
};

Validator.emailError = (email) => {
  if (!validator.isEmail(email)) {
    return "Email must be in a valid format";
  }
  return null;
};

Validator.phoneError = (phone) => {
  if (validator.isEmpty(phone)) {
    return "Telephone must not be empty";
  } else if (!validator.isNumeric(phone, { no_symbols: true })) {
    return "Telephone must contain numbers only";
  }
  return null;
};

Validator.dateError = (date) => {
  if (!validator.isDate(date)) {
    return "Please select a date";
  }
  return null;
};

Validator.weightError = (weight) => {
  if (validator.isEmpty(weight)) {
    return "Weight must not be empty";
  }
  return null;
};

Validator.countryError = (country) => {
  if (validator.isEmpty(country)) {
    return "Country must be selected";
  }
  return null;
};

Validator.bioError = (bio) => {
  if (validator.isEmpty(bio)) {
    return "Bio must not be empty";
  }
  return null;
};
