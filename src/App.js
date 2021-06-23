import { useState } from "react";
import "./App.scss";
import SongsData from "./Components/SongsData";
import Loader from "./Components/Loader";

const  App = () => {

  const [songs, setSongs] = useState('sia');
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState();


  const onInputHandler = (event) => {
    
    setInputValue(event.target.value);
    
  };


  const onSubmitHandler = (event) => {

    event.preventDefault();
    setSongs(inputValue);
    setInputValue('');

  };

  const onLoadingHandler = (event) =>{
    setLoading(event)
  }

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <input placeholder="Search your music..." value={inputValue} onChange={onInputHandler} />
          <button onClick={onSubmitHandler}> Go </button>
        </div>
      </header>
      <Loader loading={loading}>
        <SongsData
          songs={songs}
          loadHandler={onLoadingHandler}
        />
      </Loader>
    </div>
  );
}

export default App;
