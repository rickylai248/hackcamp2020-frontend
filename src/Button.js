import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button = ({ ...other }) => {
  return <MuiButton {...other}>clickme</MuiButton>;
};

export default Button;
