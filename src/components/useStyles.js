import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
    boxShadow: "none",
    width: "100%",
    display: "flex",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    fontWeight: "bolder",
    fontFamily: "system - ui",
    fontSize: "2.4rem",
  },
  cartMargin: {
    marginLeft: theme.spacing(2),
  },
  root: {
    display: "flex",
    justifyContent: 'flex-end',
  },
  listItem: {
    padding: 0,
  },
  overley: {
    top: "-531px",
    width: "100 %",
    height: "532px",
    position: "relative",
    background: "#000000a8",
  },
  cardMedia: {
    height: "100%",
  },
  cardStyle: {
    height: "100%",
  },
  overleyDiv: {
    top: "280px",
    position: "relative",
    textAlign: "center",
    color: "#fff",
  },
  link: {
    padding: "10px 22px",
    border: "2px solid",
    borderRadius: "28px",
    fontSize: "11px",
    fontWeight: "bold",
  },
  footerRoot: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: "#007bff",
    height: "67px",
    alignItems: "center",
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    boxShadow: "none",
    background: "none",
    color: "white",
    fontWeight: "bold",
  },
  social: {
    marginLeft: "25px",
  },
  footerContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "50px",
    color: "#fff",
  },
  mainDiv: {
    background: "#2e2e2f",
    height: "auto",
  },
  footerLastDiv: {
    display: "flex",
    backgroundColor: "#1f1f1f",
    height: "50px",
    alignItems: "center",
    color: "white",
    marginTop: "30px",
    textAlign: "center",
  },
  footerLastPaper: {
    padding: theme.spacing(2),
    boxShadow: "none",
    background: "none",
    color: "white",
  },
  dotDiv: {
    margin: theme.spacing(1),
  },
  burger:{
    display: 'none',
    cursor: 'pointer',
    fontSize: '25px',

    [theme.breakpoints.down("sm")]: {
      display: 'block',
     
    }
  },
  navBar:{
    [theme.breakpoints.down("sm")]: {
      display: 'none',

    }
  },
  active:{
    display: 'flex',
  },
 
}));

export default useStyles;
