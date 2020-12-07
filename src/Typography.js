import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
}));

const Typography = ({ children }) => {
  const classes = useStyles();

  return <span className={classes.root}>{children}</span>;
};

export default Typography;
