const yup = require("yup");

const userSchema = yup.object({
  name: yup.string().required("please enter a name"),
  email: yup.string().email("invalid email").required(),
  password: yup.string()
    .required("Enter a valid password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

module.exports = userSchema;
