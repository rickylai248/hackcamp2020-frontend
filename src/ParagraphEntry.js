import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MuiTextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "white",
  },
}));

const ParagraphEntry = ({ value, onChange, ...other }) => {
  const classes = useStyles();

  const handleChange = () => {
    onChange(value);
  };

  return (
    <MuiTextField
      classes={{ root: classes.root }}
      onChange={handleChange}
      multiline
      rows={4}
      value={value}
      {...other}
    />
  );
};

export default ParagraphEntry;
