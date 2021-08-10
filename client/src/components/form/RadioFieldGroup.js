import React from "react";
import { createStyles, FormControlLabel, makeStyles, Radio, RadioGroup } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const useStyles = makeStyles((theme) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        width: "0.5em",
        height: "0.5em",
      },
    },
  })
);

export const RadioFieldGroup = ({ name, options, ...otherProps }) => {
  const classes = useStyles()
  const { setFieldValue } = useFormikContext();
  const [field, metaData] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const config = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };
  if (metaData && metaData.touched && metaData.error) {
    config.error = true;
    config.helperText = metaData.error;
  }

  return (
    <RadioGroup {...config}>
      {Object.keys(options).map((item, pos) => {
        return (
          <FormControlLabel
          className={classes.smallRadioButton}
            key={pos}
            value={options[item]}
            control={<Radio />}
            label={<span style={{ fontSize: "0.8rem" }}>{options[item]}</span>}
            
          />
        );
      })}
    </RadioGroup>
  );
};
