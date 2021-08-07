const yup = require("yup");

const userSchema = yup.object({
  name: yup.string().required("please enter a valid name"),
  email: yup.string().email("invalid email").required(),
  criteria: yup.string().required("please enter a valid criteria"),
  value: yup.number().required("please enter a valid value"),
  phone: yup
    .number()
    .equals(10, "Please enter a 10 digit phone number")
    .required("please enter a phone number"),
  days: yup.string().required("please insert the list of days"),
});

module.exports = userSchema;
