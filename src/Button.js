import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button = ({ children, ...other }) => {
  return <MuiButton {...other}>{children}</MuiButton>;
};

export default Button;
