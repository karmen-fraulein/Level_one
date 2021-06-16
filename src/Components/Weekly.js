// import { useState } from 'react';
// import FetchApi from './FetchApi';
import './Weekly.css';



const Weekly = props => {
    // const { data, error, isLoaded } = FetchApi(
    //     "https://api.weatherbit.io/v2.0/forecast/daily?city=Gori,GE&key=b90d5851d1184aff9356323979e96021&include=minutely"

    // );
    // if (isLoaded) {
    //     return <div>Loading...</div>
    // }

    // if (error) {
    //     throw (
    //         data.error
    //     )
    // }
    return (
        <div className="weekly-div">
            <ul>
            {/* <div>{data.city_name}</div>
            <h2>{data.country_code}</h2> */}

                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Weekly;