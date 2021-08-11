import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    infoTitle: {
        fontSize: '30px',
        position: 'relative',
        top: '127px',
    },
    title_div:{
        background:'#4f4f4f1f',
        width:'100%',
        height:'250px',
        textAlign:'center',
    }
}));

function ProductTitle() {
    const classes = useStyles();
    return (
        <div className={classes.title_div}>
            <Typography variant='h1' className={classes.infoTitle}>
                Product page
            </Typography>
            
            
        </div>
    )
}

export default ProductTitle
