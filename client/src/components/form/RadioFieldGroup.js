import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

export const RadioFieldGroup = ({ name, options, ...otherProps }) => {
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
            key={pos}
            value={options[item]}
            control={<Radio />}
            label={options[item]}
          />
        );
      })}
    </RadioGroup>
  );
};
