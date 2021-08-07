const yup = require("yup");

const loginSchema = yup.object({
  email: yup.string().email("invalid email").required(),
  password: yup.string().required("please enter a valid password"),
});


module.exports = loginSchema;
