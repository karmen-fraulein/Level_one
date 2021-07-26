import React, {useContext} from 'react';
import {Box, CardMedia, Link as Mlink} from "@material-ui/core";
import {Link} from "react-router-dom";
import {USERLOGIN} from "../rote";
import AuthContext from "../store/auth-context";
import useStyles from "./useStyles";

const SingleUserInfo = ()  => {
    const classes = useStyles()
    const ctx = useContext(AuthContext)


    return(
<>
        {
    ctx.userData.user.name && (

        <>

            <Box color="white" ml={1.5}>
                <Mlink component={Link} to={USERLOGIN} href="/" color="inherit" onClick={ctx.onLogout}>
                    Log out
                </Mlink>

                <Mlink component={Link} color="inherit">
                    {ctx.userData.user.name}
                </Mlink>
            </Box>
            <Box color="white" ml={1.5}>
                <Mlink href="/" color="inherit" className={classes.link}>
                    <CardMedia image={ctx.userData.user.avatar}/>
                </Mlink>
            </Box>
        </>
    )
}
</>

    )
}

export default SingleUserInfo;