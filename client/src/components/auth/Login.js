import React, { useContext, useState, useEffect } from "react";
import "../../css/CreateAlertForm.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Alert, AlertTitle } from "@material-ui/lab";
import SubmitButton from "../form/SubmitButton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldForm from "../form/TextFieldForm";

import Container from "@material-ui/core/Container";
import "../../css/Register.css";
import AuthContext from "../../context/auth/authContext";

const initialFormData = {
  email: "",
  password: "",
};

const formValidation = Yup.object().shape({
  password: Yup.string().required("Please Enter your password"),
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

export default function Login(props) {
  const authContext = useContext(AuthContext);
  const { login, error, clearError, isAuthenticated } = authContext;
  const [errorLogin, setErrorLogin] = useState(error);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/peakshavingalert");
    }
    if (error) {
      console.log(error);
      setErrorLogin(error);
      setTimeout(() => {
        clearError();
        setErrorLogin(null);
      }, 5000);
    }
  }, [error, isAuthenticated, props.history]);

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className="register">
        {errorLogin ? (
          <Alert severity="error">
            <AlertTitle>Registration</AlertTitle>
            <strong>{errorLogin}</strong>
          </Alert>
        ) : null}
        <div className={classes.title}>
          <strong> Sign In</strong>
        </div>

        <div>
          <Formik
            initialValues={{ ...initialFormData }}
            validationSchema={formValidation}
            onSubmit={(values, { resetForm }) => {
              login(values)
              resetForm();
            }}
          >
            <Form className={classes.form}>
              <Grid container spacing={2}>
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
              </Grid>
              <SubmitButton className={classes.submit}>Sign Up</SubmitButton>
            </Form>
          </Formik>
        </div>
      </div>
    </Container>
  );
}
