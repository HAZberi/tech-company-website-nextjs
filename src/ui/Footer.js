import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import FooterAdornment from "./FooterAdornment";
import MobileFooterAdornment from "./MobileFooterAdornment";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    overflowX: "hidden",
    zIndex: theme.zIndex.modal + 1,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "black",
      height: "7.5em",
      overflowX: "visible",
    },
  },
  adornment: {
    width: "21em",
    verticalAlign: "bottom",
    overflowY: "visible",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      zIndex: 1302,
      marginTop: "1rem",
      width: "100vw",
    },
  },
  mainContainer: {
    position: "absolute",
    marginRight: 0,
    width: "100vw",
    overflow: "hidden",
    marginLeft: "0.4rem",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
      paddingRight: "10%",
      margin: 0,
    },
  },
  link: {
    ...theme.typography.link,
    opacity: 0.7,
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
      opacity: 1,
      textDecoration: "none",
    },
  },
  icon: {
    width: "3.5rem",
    height: "3.5rem",
    padding: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "7rem",
      height: "7rem",
      padding: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "6rem",
      height: "6rem",
    },
  },
  mediaIconsContainer: {
    marginTop: "-3.5rem",
    paddingRight: "2rem",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      padding: "1.5rem",
      position: "absolute",
      zIndex: 1303,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0.5rem",
      padding: 0,
    },
  },
  navColumns: {
      marginTop: "1.25rem",
      marginBottom: "-0.55rem",
    [theme.breakpoints.down("md")]: {
      padding: "0rem",
      margin: 0,
    },
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  const [homeNavStyles, setHomeNavStyles] = useState({});

  useEffect(()=>{
    if (window.matchMedia("(max-width: 1440px)").matches){
      setHomeNavStyles({display: "none"});
    }else {
      setHomeNavStyles({})
    }
  },[])

  return (
    <Grid container className={classes.footer}>
      <Hidden smDown>
        <Grid
          item
          container
          justify="center"
          className={classes.mainContainer}
          spacing={medium ? 5 : 10}
        >
          <Grid item className={classes.navColumns}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                style={homeNavStyles}
                onClick={() => {
                  props.setValue(0);
                  props.setSelected(null);
                }}
                component={Link}
                href="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.navColumns}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(null);
                }}
                component={Link}
                href="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(0);
                }}
                component={Link}
                href="/software"
              >
                Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(1);
                }}
                component={Link}
                href="/mobileapps"
              >
                App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(2);
                }}
                component={Link}
                href="/websites"
              >
                Web Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.navColumns}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                href="/revolution"
              >
                Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                href="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                href="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                href="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.navColumns}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelected(null);
                }}
                component={Link}
                href="/about"
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelected(null);
                }}
                component={Link}
                href="/about"
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelected(null);
                }}
                component={Link}
                href="/about"
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.navColumns}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(4);
                  props.setSelected(null);
                }}
                component={Link}
                href="/contact"
              >
                Contact Us
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(5);
                  props.setSelected(null);
                }}
                component={Link}
                href="/estimate"
              >
                Get Estimate
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      {smaller ? null : (
        <Grid item className={classes.adornment}>
          <FooterAdornment className={classes.adornment} />
        </Grid>
      )}
      <Grid container direction="column" alignItems="center">
        <Grid
          item
          container
          justify={smaller ? "center" : "flex-end"}
          className={classes.mediaIconsContainer}
        >
          <Grid
            item
            component={"a"}
            href="https://facebook.com"
            className={classes.icon}
          >
            <img
              alt="facebook-icon"
              src="/assets/facebook.svg"
              rel="noopener noreferrer"
              target="_blank"
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://instagram.com"
            className={classes.icon}
          >
            <img
              alt="facebook-icon"
              src="/assets/instagram.svg"
              rel="noopener noreferrer"
              target="_blank"
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://twitter.com"
            className={classes.icon}
          >
            <img
              alt="twitter-icon"
              src="/assets/twitter.svg"
              rel="noopener noreferrer"
              target="_blank"
            />
          </Grid>
        </Grid>
        {smaller ? (
          <Grid item className={classes.adornment}>
            <MobileFooterAdornment className={classes.adornment}/>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Footer;
