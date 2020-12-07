import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import history from "./history";

import hippo from "./hippo.svg";
import logo from "./HappyHippo.svg";
import calm from "./calm.svg";
import depressed from "./depressed.svg";
import stressed from "./stressed.svg";
import happy from "./happy.svg";

import Box from "./Box";
import BackgroundBox from "./BackgroundBox";
import Button from "./Button";

const useStyles = makeStyles(() => ({
  happy: {
    backgroundColor: "#FFD9AC",
    border: "3px solid #FEA53F",
    "&:hover": {
      backgroundColor: "#FFD9AC",
    },
  },
  calm: {
    backgroundColor: "#EBD4F4",
    border: "3px solid #D499EB",
    "&:hover": {
      backgroundColor: "#EBD4F4",
    },
  },
  depressed: {
    backgroundColor: "#CCD3FA",
    border: "3px solid #526AF0",
    "&:hover": {
      backgroundColor: "#CCD3FA",
    },
  },
  stressed: {
    backgroundColor: "#DCFFCA",
    border: "3px solid #8CD167",
    "&:hover": {
      backgroundColor: "#DCFFCA",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={15} direction="column">
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>

        <Grid container item spacing={2} direction="row" alignItems="center">
          <Grid item>
            <Box>Hello, Alex How are you feeling today?</Box>
          </Grid>
          <Grid item>
            <img src={hippo} className="App-logo" alt="hippo" />
          </Grid>
        </Grid>

        <Grid item>
          <BackgroundBox>
            <Grid container spacing={15} direction="column">
              <Grid container spacing={15} direction="row">
                <Grid item>
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      history.push("/goodVibes");
                    }}
                    classes={{ root: classes.happy }}
                  >
                    Happy
                    <img src={happy} alt="happy" />
                  </Button>
                </Grid>
                <Grid item>
                  {
                    // Add onClick event to Button
                  }
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      history.push("/goodVibes");
                    }}
                    classes={{ root: classes.calm }}
                  >
                    Calm
                    <img src={calm} alt="calm" />
                  </Button>
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      /*  history.push("/goodVibes");*/
                    }}
                    classes={{ root: classes.depressed }}
                  >
                    Depresssed
                    <img src={depressed} alt="depressed" />
                  </Button>

                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      /*  history.push("/goodVibes");*/
                    }}
                    classes={{ root: classes.stressed }}
                  >
                    Stressed
                    <img src={stressed} alt="stressed" />
                  </Button>
                </Grid>
                <Grid container spacing={15} direction="row">
                  {
                    // Add grid items and other buttons
                  }
                </Grid>
              </Grid>
            </Grid>
          </BackgroundBox>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
