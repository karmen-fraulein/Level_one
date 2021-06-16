import { useState } from 'react';
import Button from './Components/Button';
import CurrentWeather from './Components/CurrentWeather'
import Weekly from './Components/Weekly';
import Modal from './Components/Modal';

import './App.css';

function App() {

  const [value, setValue] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  

  const onValueHandler = (event) =>{
    
    setValue(event.target.value)
    console.log(value)
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    setValue('');
  }

  const onModalHandler = () => {
    setModalIsOpen(true)
    console.log('modal')
  }
  const onCloseHandler = () =>{
    setModalIsOpen(false)
  }

  return (
    <div className="app-main-div">
      <form className="app_form" onSubmit={onSubmitHandler}>
        <input type="text" value={value} onChange={onValueHandler} placeholder="Tbilisi"></input>
        <Button type="submit" >Search</Button>
      </form>
      <div className="app-div">
        <CurrentWeather onClick={onModalHandler} />
        <Weekly />

      </div>
      <Modal open={modalIsOpen} onClose={onCloseHandler} ></Modal>
      
    </div>
  );
}

export default App;
