import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./HappyHippo.svg";
import Grid from "@material-ui/core/Grid";
import Typography from "./Typography";

import ParagraphEntry from "./ParagraphEntry";
import BackgroundBox from "./BackgroundBox";
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
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        <Grid item>
          Yay, I am glad that you are feeling good. Let's share this positive
          vibe with others.
        </Grid>
        <Grid item>
          <BackgroundBox>
            <form className={classes.root}>
              <Grid container spacing={15} direction="column">
                <Grid item>
                  <Typography>Message a coworker!</Typography>
                </Grid>
                <Grid item>
                  <SelectEmployee />
                </Grid>
                <Grid item>
                  <Typography>Write a positive message!</Typography>
                </Grid>
                <Grid item>
                  <ParagraphEntry />
                </Grid>
              </Grid>
            </form>
          </BackgroundBox>
        </Grid>
      </Grid>
    </>
  );
};

export default GoodVibes;
