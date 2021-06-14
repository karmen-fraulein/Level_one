import React from 'react';

import classes from './Weather.module.css';

const Weather = (props) => {

  return (
    <li className={classes.ul}>
      <h2>{props.main}</h2>
      <h3>{props.description}</h3>
      <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
    </li>
  );
};

export default Weather;
