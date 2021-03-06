import React from "react";
import Link from "../Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "./ButtonArrow";

const useStyles = makeStyles((theme) => ({
  learnOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.orange,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderWidth: 3,
    height: "35px",
    opacity: 0.8,
    marginRight: 0,
    marginLeft: 0,
  },
  estimateOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.hoverBlue,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderWidth: 3,
    height: "35px",
    opacity: 0.8,
    marginRight: 0,
    marginLeft: 0,
    marginTop: "15px",
    "&:hover": {
      backgroundColor: theme.palette.common.hoverBlue,
      color: "white",
      opacity: 1,
    },
  },
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //This property introduces a parallax effect
    //backgroundAttachment: "fixed",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
      //This property removes a parallax effect.
      //backgroundAttachment: "inherit",
    },
  },
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      style={{ height: smaller ? "85em" : "60em", width: "100%" }}
      alignItems="flex-start"
    >
      <Grid
        item
        container
        style={{
          position: "absolute",
          marginTop: smaller ? "5em" : "7.5em",
          textAlign: smaller ? "center" : "inherit",
        }}
        lg={
          props.grid
            ? props.grid.size === "lg"
              ? props.grid.noc
              : false
            : false
        }
        md={
          props.grid
            ? props.grid.size === "md"
              ? props.grid.noc
              : false
            : false
        }
        sm={
          props.grid
            ? props.grid.size === "sm"
              ? props.grid.noc
              : false
            : false
        }
      >
        <Grid
          container
          direction="column"
          style={{ marginLeft: smaller ? 0 : "5em" }}
        >
          <Grid item>
            <Typography variant="h2" gutterBottom>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: 500, color: "#383838" }}
              gutterBottom
            >
              Take advantage of the 21st Century.
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: smaller ? "4em" : 0 }}>
            <Button
              component={Link}
              href="/revolution"
              onClick={() => {
                props.setValue(2);
                props.setSelected(null);
              }}
              variant="outlined"
              className={classes.learnOutlineButton}
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              href="/estimate"
              onClick={() => {
                props.setValue(5);
                props.setSelected(null);
              }}
              variant="outlined"
              className={classes.estimateOutlineButton}
            >
              Get Estimate
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* HINT: a background image can be set directly on the Grid Container
          as className Prop and then we dont need href set the inner container with
          absolute positioning
        */}
      <div className={classes.background} />
    </Grid>
  );
};

export default CallToAction;
