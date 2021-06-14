import React from 'react';

import Weather from './Weather';
import classes from './WeatherList.module.css';

const WeatherList = (props) => {
  return (
      <>
    <ul className={classes['weather-list']}>
      {props.data.weather.map((weather) => (
        <Weather
          key={weather.id}
          main={weather.main}
          description={weather.description}
          icon={weather.icon}
          country = {weather.country}
        />
      ))}
        {<div className={classes['weather-city']}>
        <div>{props.data.sys.country}</div>
        <div>{props.data.name}</div>
        {/* ცელსიუსის დასახატი ფორმულა */}
        <h1>{Math.round(props.data.main.temp - 273.15)}&#8451;</h1> 
      </div>


      }
    </ul>

      </>
  );
};

export default WeatherList;
