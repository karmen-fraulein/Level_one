import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues =props.dataPoints.map(dataPoint => dataPoint.value) //დატაპოინტ ველიუს იღებს ერეის სახით
    const totalMaxinum = Math.max(...dataPointValues) // არჩევს ველიუების მაქსიმუმს,რადგან ერეია, გვჭირდება სპრედ ოპერატორი
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
            <ChartBar 
            key = {dataPoint.label}
            value={dataPoint.value} 
            maxValue={totalMaxinum} 
            label={dataPoint.label} 
        />
    ))}
        </div>
    )
}

export default Chart;