const yup = require("yup");

const alertSchema = yup.object({
  name: yup.string().required("please enter a valid name"),
  email: yup.string().email("invalid email").required(),
  criteria: yup.string().required("please enter a valid criteria"),
  value: yup.number().required("please enter a valid value"),
  phone: yup.string().required().matches(/^[0-9]{10}$/, 'Must be exactly 10 digits'),
  days: yup.string().required("please insert the list of days"),
});

module.exports = alertSchema;
