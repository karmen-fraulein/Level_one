import React from 'react';

import {makeStyles, Typography, Box} from "@material-ui/core";


import FormikRegister from "./FormikRegister";

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
        height:'auto',
        textAlign: 'center',
        marginBottom: '20px'
    }
})




const UserRegistration = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.titleDiv}>
                <Typography variant='h5' className={classes.title}>
                    Sign up
                </Typography>
            </div>
            <Box component='div' className={classes.formDiv}>
                <FormikRegister />
            </Box>

        </>
    )
}


export default UserRegistration