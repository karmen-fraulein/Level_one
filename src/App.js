import React, { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';

import WeatherList from './components/WeatherList';
import './App.css';
import { debounce } from 'lodash';

function App() {
  const [weather, setWeather] = useState([]);
  const [data ,setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState('Tbilisi');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false)

  //დებაუნს ფუნქცია
  const func = (value) => {
    setCountry(value);
  }
  const [debouncedFunction] = useDebouncedCallback(func, 1000);

  const weatherInputHandler = event => {
    setInputValue(event.target.value);
    debouncedFunction(event.target.value)
  }

  //იუზქოლბექ ფუნქცია რექუესტისთვის
   const fetchWeatherHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=482516052a4e6692cfb777d5ab1d65f7`)
      if (!response.ok) {
        throw new Error('Please enter your city.');
      };
      const data = await response.json();

      setData(data)
      const transformedWeather = data.weather.map(res => {
        return {

          id: res.id,
          main: res.main,
          description: res.description,
          icon: res.icon
        }

      })
      setWeather(transformedWeather)
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)


  }, [country])
  useEffect(() => { fetchWeatherHandler() }, [fetchWeatherHandler])


  //ზოგადი ცვლადი, რომელიც ჯსიქსში რენდერდება
  let content = <p> Found no weather</p>

  if (weather.length > 0) {
    content = <WeatherList data = {data} />
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }


  function useDebouncedCallback(callback, delay) {

    const d = callback;

    const callbackfunc = useCallback(debounce(d, delay), []);

    return [callbackfunc]
  }


  //მოდალის ჰენდლერები
  const ModalHandler = () =>{
    setModal(true)
  }
  const ModalHandlerInModal = () =>{
    setModal(false)
  }

  const overleyhandler = () =>{
    setModal(false)
  }

  return (
    <React.Fragment>
      <section>
        <input className="input" value={inputValue} onChange={weatherInputHandler}></input>
        
      </section>
      <section>
        {content}
        <button onClick={ModalHandler}>Hourly forecast</button>
        <Modal 
        isOpen={modal} 
        onRequestClose={overleyhandler} 
          
        >
          <div className="modal-div">
            <h2>Modal</h2>
            <p>i am modal</p>
            <button onClick={ModalHandlerInModal}>Close</button>
          </div>
          
        </Modal>
      </section>
      
      

    </React.Fragment>
  );

}

export default App;
