import React, {useContext, useEffect, useState} from 'react';
import {Box, CardMedia, Link as Mlink} from "@material-ui/core";
import {Link} from "react-router-dom";
import {USERLOGIN} from "../rote";
import AuthContext from "../store/auth-context";
import useStyles from "./useStyles";

const SingleUserInfo = ()  => {
    const classes = useStyles()
    const ctx = useContext(AuthContext)

    const  [singleUserData, setSingleUserData] = useState({})

    useEffect(() => {
        if(ctx.userData.user ){
            setSingleUserData(ctx.userData.user)
        }
        else{
            setSingleUserData(ctx.userData)
        }
    },[ctx.userData])



    return(
<>
        {
            singleUserData &&  singleUserData.name && (

        <>

            <Box color="white" ml={1.5}>
                <Mlink component={Link} color="inherit">
                    {singleUserData.name}
                </Mlink>
                <Box color="white" ml={1.5}>
                    <Mlink component={Link} to={USERLOGIN} href="/" color="inherit" onClick={ctx.onLogout}>
                        Log out
                    </Mlink>
                </Box>



            </Box>
            <Box color="white" ml={1.5}>
                <Mlink  color="inherit" >
                    <CardMedia className={classes.avatar} image={singleUserData.avatar}/>
                </Mlink>
            </Box>
        </>
    )
}
</>

    )
};

export default SingleUserInfo;