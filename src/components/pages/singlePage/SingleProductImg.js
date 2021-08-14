import React from 'react';
import { Grid, Box,CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    firsBox: {
        width: "61%",
        margin: 'auto',
        
    },
    lastBox:{
        display:"flex",
        justifyContent: 'space-evenly',
    },
    cardmedia:{
        height: '390px',
        width: '348px',
        margin: 'auto',
    },
    lastCardmedia:{
        width: '100px',
        height:'110px'
    }
}))

function SingleProductImg({singleData}) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.firsBox}><CardMedia image={singleData.image} className={classes.cardmedia} /></Box>
            <Box className={classes.lastBox}>
                <CardMedia image={singleData.image} className={classes.lastCardmedia} />
                <CardMedia image={singleData.image} className={classes.lastCardmedia}/>
                <CardMedia image={singleData.image} className={classes.lastCardmedia}/>
                <CardMedia image={singleData.image} className={classes.lastCardmedia}/>
                </Box>
        </Grid>
    )
}

export default SingleProductImg
