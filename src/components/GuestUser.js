import React, {useContext} from 'react';
import {Box, Link as Mlink} from "@material-ui/core";
import {Link} from "react-router-dom";
import {USERLOGIN} from "../rote";

import useStyles from "./useStyles";


const GuestUser = () => {
    const classes = useStyles();

    return(
        <>
            <Box color="white" ml={1.5}>

                <Mlink component={Link} to ={USERLOGIN} href="/" color="inherit">
                    Sign in
                </Mlink>
            </Box>
            <Box color="white" ml={1.5}>
                <Mlink href="/" color="inherit" className={classes.link} >
                    SIGN UP
                </Mlink>
            </Box>
        </>
    )
}

export default  GuestUser;