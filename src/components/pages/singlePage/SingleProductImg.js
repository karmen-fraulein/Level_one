import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    firsBox: {
        width: "100%",
        height: "auto",
    },
    lastBox:{
        display:"flex"
    }
}))

function SingleProductImg() {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.firsBox}>kjdkjk</Box>
            <Box className={classes.lastBox}>
                <span>img</span>
                <span>img</span>
                <span>img</span>
                <span>img</span>
                </Box>
        </Grid>
    )
}

export default SingleProductImg
