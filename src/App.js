// import NavBar from './components/NavBar';
import Banner from "./components/Banner";
// import Footer from './components/Footer';
import {Switch, Route, Redirect } from "react-router-dom";
import Leyout from "./leyout";
import Single from './components/singlePage/Single';


import MainHome from "./components/MainHome";

import { MAIN_HOME, SINGLE } from "./rote";

function App() {
  return (
    <div>
      <Switch>

        <Leyout>
          <Route path='/' exact>
            <Redirect to={MAIN_HOME} />
          </Route>
          <Route path={MAIN_HOME} exact>
            <Banner />

            <MainHome />
          </Route>
          <Route path={SINGLE}>
            <Single />
          </Route>
        </Leyout>
        
      </Switch>
      
    </div>
  );
}

export default App;
