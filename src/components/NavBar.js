import React, { useState, useContext } from "react";
import useStyles from "./useStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";



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
  Link as Mlink,
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import {USERLOGIN} from "../rote";
import AuthContext from "../store/auth-context";
// import MenuIcon from '@material-ui/icons/Menu';

//კითხვა:
// აიკონებზეა პრობლემა
//ფონტოსამის გამოყენება

const NavBar = () => {
  const classes = useStyles();
  const ctx = useContext(AuthContext)


const [navigation, setNavigation] = useState(false)


const onNavbarHandler = () => {
  
  if (navigation){
    setNavigation (false)
  }
  else{
    setNavigation(true)
  }
}


  return (
              <div className={classes.root1}>
                <AppBar>
                  <Toolbar >
                    <Grid item lg={7} md={6} xs={5}>
                      <Typography variant="h6" className={classes.title}>
                        {/* <FontAwesomeIcon icon={'fab'}/> */}
                        <i className="fab fa-mdb"></i>
                      </Typography>
                      {/* ფედინგების წაშლოა ლისთებისთვის?*/}
                    </Grid>
                    <Grid item lg={4} md={5} xs={6}>
                      <List className={navigation ? classes.active : classes.root + ' ' + classes.navBar} >
                        <Mlink>
                          <Badge badgeContent={1} color="secondary"></Badge>
                          <Box component="span" ml={1.5} color="white">
                            <ShoppingCartIcon />
                          </Box>
                        </Mlink>
                        <Box color="white" ml={1.5}>
                          <Mlink href="/" color="inherit">
                            Shop
                          </Mlink>
                        </Box>
                        <Box color="white" ml={1.5}>
                          <Mlink href="/" color="inherit">
                            Contact
                          </Mlink>
                        </Box>
                        <Box color="white" ml={1.5}>
                          {ctx.isLoggedIn ? <Mlink component={Link} to ={USERLOGIN} href="/" color="inherit"onClick={ctx.onLogout}>
                            Log out
                          </Mlink>
                              :
                              <Mlink component={Link} to ={USERLOGIN} href="/" color="inherit">
                            Sign in
                          </Mlink>}
                        </Box>
                        <Box color="white" ml={1.5}>
                          <Mlink href="/" color="inherit" className={classes.link} >
                            SIGN UP
                          </Mlink>
                        </Box>
                      </List>

                    </Grid>
                    <Grid item lg={1} md={1} xs={1}>
                      <Box color="white" ml={1.5} className={classes.burger} onClick={onNavbarHandler}>
                        <i className="fas fa-bars "></i>
                      </Box>
                    </Grid>

                  </Toolbar>
                </AppBar>
              </div>
          )

};

export default NavBar;
