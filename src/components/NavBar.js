import React from "react";
import useStyles from "./useStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import ListItem from './ListItem';
import Badge from "@material-ui/core/Badge";
import {spacing} from "@material-ui/system";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-solid-svg-icons'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Container,
  Grid,
  Link,
} from "@material-ui/core";
// import MenuIcon from '@material-ui/icons/Menu';

//კითხვა:
// აიკონებზეა პრობლემა
//ფონტოსამის გამოყენება

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          {/* </IconButton> */}

          <Typography variant="h6" className={classes.title}>
            {/* <FontAwesomeIcon icon={'fab'}/> */}
                      <i className="fab fa-mdb"></i>
          </Typography>
          {/* ფედინგების წაშლოა ლისთებისთვის?*/}
          <List className={classes.root} display={{ xs: 'none', md: 'block' }}>
            <Link>
              <Badge badgeContent={1} color="secondary"></Badge>
              <Box component="span" ml={1.5} color="white">
                <ShoppingCartIcon />
              </Box>
            </Link>
            <Box color="white" ml={1.5}>
              <Link href="/" color="inherit">
                Shop
              </Link>
            </Box>
            <Box color="white" ml={1.5}>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box color="white" ml={1.5}>
              <Link href="/" color="inherit">
                Sign in
              </Link>
            </Box>
            <Box color="white" ml={1.5}>
              <Link href="/" color="inherit" className={classes.link}>
                SIGN UP
              </Link>
            </Box>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
