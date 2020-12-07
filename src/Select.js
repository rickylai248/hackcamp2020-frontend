import React from "react";

import MuiTextField from "@material-ui/core/TextField";

const Select = ({ value, ...other }) => {
  return <MuiTextField select value={value} {...other} />;
};

export default Select;
