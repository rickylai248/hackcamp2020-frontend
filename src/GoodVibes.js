import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SelectEmployee from "./SelectEmployee";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const GoodVibes = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={15} direction="column">
        <Grid item>
          Yay, I am glad that you are feeling good. Let's share this positive
          vibe with others.
        </Grid>
        <Grid item>
          <form className={classes.root}>
            {" "}
            <SelectEmployee />
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default GoodVibes;
