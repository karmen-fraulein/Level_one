import {
  Grid,
  makeStyles,
  Link as Mlink
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Cards from "./Cards";
import { Link } from 'react-router-dom';

import VerticalCards from "./VerticalCards";

import fullData from '../Api';
import API from "../fetchApi";

const useStyle = makeStyles({
  cardList: {
    justifyContent: "center",
    width: '100%',
    maxWidth: '100%',
  },
  fullWidth: {
    width: "100% !important",
  },
  width: {
    width: '100%',
    maxWidth: '100%',
  },

});

function CardLists() {
  const classes = useStyle();
  const [listStyle, setListStyle] = useState("gridView");

  const [data, setData] = useState([]);

  useEffect(()=>{
    API.getAllData('/products').then((product)=>{
      setData(product)
    })
  },[])


  return (
    <Grid container item xs={12} lg={8} className={classes.width} >
      <Grid container spacing={5} className={classes.cardList}>
        {data.map((e) =>
          listStyle === "gridView" ? (
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Mlink underline='none' component ={Link} to={`/single/:${e.id}`}>
                <Cards data={e} />
              </Mlink>
              
            </Grid>
          ) : (
            <Grid item xs={12} className={classes.fullWidth}>
              <VerticalCards data={e} />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
}

export default CardLists;
