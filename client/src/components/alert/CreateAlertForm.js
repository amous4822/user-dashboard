import React, { useContext } from "react";
import "../../css/CreateAlertForm.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SubmitButton from "../form/SubmitButton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldForm from "../form/TextFieldForm";
import SelectFieldForm from "../form/SelectFieldForm";
import { RadioFieldGroup } from "../form/RadioFieldGroup";
import AlertContext from "../../context/alerts/alertContext";

const optionsDropdown = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thur: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
  everyday: "Everyday",
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
  DK1: "Dk - 1",
  DK2: "Dk - 2",
  DKG: "Dk - Gas",
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
    marginBottom: "5px",
    color: "grey",
    fontSize: "0.8rem",
  },
});

export default function CreateAlertForm() {
  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;

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
          onSubmit={(values, { resetForm }) => {
            addAlert(values);
            resetForm();
          }}
        >
          <Form id="form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextFieldForm
                  name="name"
                  size="small"
                  label={<span style={{ fontSize: "0.8rem" }}>Name</span>}
                />
              </Grid>

              <Grid item xs={12}>
                <Grid className={classes.root}>Criteria</Grid>
                <RadioFieldGroup
                  row
                  name="criteria2"
                  options={optionsCriteria}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldForm
                  name="value"
                  size="small"
                  label={<span style={{ fontSize: "0.8rem" }}>Value</span>}
                />
              </Grid>
              <Grid item xs={12}>
                <SelectFieldForm
                  name="days"
                  options={optionsDropdown}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.root}>Criteria</div>
                <SelectFieldForm
                  name="criteria1"
                  options={optionsCriteria2}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldForm
                  name="email"
                  size="small"
                  label={<span style={{ fontSize: "0.8rem" }}>Email</span>}
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldForm
                  name="phone"
                  size="small"
                  label={<span style={{ fontSize: "0.8rem" }}>Phone</span>}
                />
              </Grid>
              <Grid item xs={6}>
                <SubmitButton>
                  <span style={{ fontSize: "0.8rem" }}>submit</span>
                </SubmitButton>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
