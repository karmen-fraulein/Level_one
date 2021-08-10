import React, {useContext, useEffect, useState} from 'react';
import {Box, CardMedia, Link as Mlink} from "@material-ui/core";
import {Link} from "react-router-dom";
import {USERLOGIN} from "../rote";
import AuthContext from "../store/auth-context";
import useStyles from "./useStyles";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../store/user/userActionCreators";
import {logoutHandler} from "../store/user/userActions";

const SingleUserInfo = ()  => {
    const classes = useStyles()
    const ctx = useContext(AuthContext)
    const userData = useSelector(state => state.user.user)


    const  [singleUserData, setSingleUserData] = useState({})
    const  dispatch = useDispatch()

    useEffect(() => {
        setSingleUserData(userData)
        console.log(singleUserData)
    },[userData])

    const LogoutUser = () =>{
        dispatch(logoutHandler())
    }

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
                    <Mlink component={Link} to={USERLOGIN} href="/" color="inherit" onClick={LogoutUser}>
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