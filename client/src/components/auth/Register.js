import React, { useContext, useEffect, useState } from "react";
import "../../css/CreateAlertForm.css";
import { Formik, Form } from "formik";
import { Alert, AlertTitle } from "@material-ui/lab";
import * as Yup from "yup";
import SubmitButton from "../form/SubmitButton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldForm from "../form/TextFieldForm";
import Link from "@material-ui/core/Link";

import Container from "@material-ui/core/Container";
import "../../css/Register.css";
import AuthContext from "../../context/auth/authContext";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const formValidation = Yup.object().shape({
  name: Yup.string().required("Required Field"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  password2: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string().email("invalid email").required(),
});

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "20px",
    textAlign: "center",
    fontSize: "30px",
  },
  form: {
    marginTop: "40px",
  },
  submit: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

export default function Register(props) {
  const authContext = useContext(AuthContext);
  const { register, error, clearError, isAuthenticated } = authContext;
  const [errorRegister, setErrorRegister] = useState(error);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error) {
      console.log(error);
      setErrorRegister(error);
      setTimeout(() => {
        clearError();
        setErrorRegister(null);
      }, 5000);
    }
  }, [error, isAuthenticated, props.history]);

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className="register">
        {errorRegister ? (
          <Alert severity="error">
            <AlertTitle>Registration</AlertTitle>
            <strong>{errorRegister}</strong>
          </Alert>
        ) : null}
        <div className={classes.title}>
          <strong> Sign Up</strong>
        </div>

        <div>
          <Formik
            initialValues={{ ...initialFormData }}
            validationSchema={formValidation}
            onSubmit={(values, { resetForm }) => {
              delete values.password2;
              register(values);
              resetForm();
            }}
          >
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextFieldForm name="name" label="Name" />
                </Grid>

                <Grid item xs={12}>
                  <TextFieldForm label="Email Address" name="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldForm
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldForm
                    name="password2"
                    label="Confirm Password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <SubmitButton className={classes.submit}>Sign Up</SubmitButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </div>
    </Container>
  );
}
