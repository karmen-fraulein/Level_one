// import NavBar from './components/NavBar';
import Banner from "./components/Banner";
// import Footer from './components/Footer';
import {Switch, Route, Redirect} from "react-router-dom";
import Leyout from "./leyout/leyout";
import Single from "./components/pages/singlePage/Single";

import MainHome from "./components/MainHome";

import {ADMIN, MAIN_HOME, SINGLE} from "./rote";
import AdminLayout from "./leyout/AdminLayout";
import AdminPage from "./components/pages/AdminPage";

function App() {
  return (
    <div>
      <Switch>
        
          <Route path={ADMIN} exact>
            <AdminLayout>
            <AdminPage />
            </AdminLayout>
            
          </Route>
        
        
        <Leyout>
          <Route path="/" exact>
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
