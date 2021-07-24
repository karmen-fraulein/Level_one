import React from 'react';

import {makeStyles, Typography, Box} from "@material-ui/core";

import FormikLogin from "./FormikLogin";

const useStyles = makeStyles({
    titleDiv:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '68px',
        width: '100%',
        height: '120px',
        background: '#fbfbfb',
    },
    title:{
        fontWeight: 'bolder',
    },
    formDiv:{
        height:'400px',
        textAlign: 'center',
    }
})




const UserLogin = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.titleDiv}>
                <Typography variant='h5' className={classes.title}>
                    Sign in
                </Typography>
            </div>
            <Box component='div' className={classes.formDiv}>
                <FormikLogin />
            </Box>

        </>
    )
}


export default UserLogin
