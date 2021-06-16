import FetchApi from './FetchApi';

import './CurrentWeather.css'


const CurrentWeather = props => {


    const onClickButton = () => {
        props.onClick()
    }

    // const { data, error, isLoaded } = FetchApi(
    //     "https://jsonplaceholder.typicode.com/todos"

    // );
    // console.log('current weather' , data)


    return (
        <div>
            <ul>

                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <button className="button" type="button" onClick={onClickButton}>Hourly forecast</button>


            </ul>
        </div>
    )
}

export default CurrentWeather;