const yup = require("yup");

const userSchema = yup.object({
  name: yup.string().required("please enter a name"),
  email: yup.string().email("invalid email").required(),
  password: yup.string().required("please enter a valid password"),
});


module.exports = userSchema;
