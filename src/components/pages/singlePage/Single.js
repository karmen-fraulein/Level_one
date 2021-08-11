import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import fullData from '../../../Api';
import './App.css';
import ProductTitle from './ProductTitle';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SingleProductImg from './SingleProductImg';
import SingleProductiformation from './SingleProductiformation';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '40px',
    }
}))

const Single = ({}) => {
    const classes = useStyles();
    const {Id} = useParams();
    let parseId = parseInt(Id.replace(':', ''))
    const [singleData, setSingleData]= useState({})

    const getCurrentData = () => {
        fullData.map((e) =>{
            if (e.id === parseId){
                setSingleData(e);
            }
        })
    }
    useEffect(()=>{
        getCurrentData()
    },[])
    
    
    
    
    return (
        <div>
            <ProductTitle />
            <Grid container className={classes.root} spacing={2}>
                <SingleProductImg />
                <SingleProductiformation />
                <Details />

            </Grid>
        </div>
    )
}

export default Single;
