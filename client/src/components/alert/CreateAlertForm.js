import React from "react";
import "../../css/CreateAlertForm.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SubmitButton from "../form/SubmitButton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldForm from "../form/TextFieldForm";
import SelectFieldForm from "../form/SelectFieldForm";
import { RadioFieldGroup } from "../form/RadioFieldGroup";

const optionsDropdown = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thur: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
  evr: "Everyday",
};

const initialFormData = {
  name: "",
  criteria1: "",
  criteria2: "",
  value: "",
  days: "",
  email: "",
  phone: "",
};

const optionsCriteria = {
  greater: "Greater than",
  less: "Less than",
};
const optionsCriteria2 = {
  one: "Dk - 1",
  two: "Dk - 2",
  three: "Dk - Gas",
};

const formValidation = Yup.object().shape({
  name: Yup.string().required("Required Field"),
  criteria1: Yup.string().required("please select an option"),
  value: Yup.number().integer().required("Required"),
  days: Yup.string().required("required field"),
  email: Yup.string().email("invalid email").required(),
  phone: Yup.string()
    .required()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits"),
});

const useStyles = makeStyles({
  root: {
    marginBottom: "10px",
    color: "grey",
  },
});

export default function CreateAlertForm() {
  const classes = useStyles();
  return (
    <div className="createAlert">
      <div className="createAlertTitle">
        <strong> Create Alert</strong>
      </div>

      <div>
        <Formik
          initialValues={{ ...initialFormData }}
          validationSchema={formValidation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextFieldForm name="name" size="small" label="Name" />
              </Grid>

              <Grid item xs={12}>
                <Grid className={classes.root}>Criteria</Grid>
                <RadioFieldGroup
                  row
                  name="criteria1"
                  options={optionsCriteria}
                  small="size"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldForm name="value" size="small" label="Value" />
              </Grid>
              <Grid item xs={12}>
                <SelectFieldForm
                  name="days"
                  label="Days"
                  options={optionsDropdown}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.root}>Criteria</div>
                <SelectFieldForm
                  name="criteria2"
                  label="Criteria2"
                  options={optionsCriteria2}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldForm name="email" size="small" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldForm name="phone" size="small" label="Phone" />
              </Grid>
              <SubmitButton>Submit Form</SubmitButton>
            </Grid>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
