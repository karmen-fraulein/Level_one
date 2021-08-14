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
import API from '../../../fetchApi';

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

    
    useEffect(()=>{
        API.getSingleProduct(parseId).then((data) => { setSingleData(data)})
        console.log(parseId)
    },[])
    
    
    
    
    return (
        <div>
            <ProductTitle />
            <Grid container className={classes.root} spacing={2}>
                <SingleProductImg singleData={singleData} />
                <SingleProductiformation singleData={singleData} />
                <Details />

            </Grid>
        </div>
    )
}

export default Single;
