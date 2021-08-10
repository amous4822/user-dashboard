const yup = require("yup");

const alertSchema = yup.object({
  name: yup.string().required("please enter a valid name"),
  email: yup.string().email("invalid email").required(),
  criteria1: yup.string().required("please enter a valid criteria"),
  value: yup.number().required("please enter a valid value"),
  criteria2: yup.string().required(),
  days: yup.string().required("please insert the list of days"),
});

module.exports = alertSchema;
