import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MuiTextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "white",
  },
}));

const Select = ({ value, ...other }) => {
  const classes = useStyles();

  return (
    <MuiTextField
      classes={{ root: classes.root }}
      select
      value={value}
      {...other}
    />
  );
};

export default Select;
