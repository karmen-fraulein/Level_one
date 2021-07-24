import { useContext } from "react";
import Banner from "./components/Banner";
import {Switch, Route, Redirect} from "react-router-dom";
import Leyout from "./leyout/leyout";
import Single from "./components/pages/singlePage/Single";
import MainHome from "./components/MainHome";
import {ADMIN, MAIN_HOME, SINGLE, USERLOGIN, REGISTER} from "./rote";
import AdminLayout from "./leyout/AdminLayout";
import AdminPage from "./components/pages/admin/AdminPage";
import UserLogin from "./components/pages/userLogin/UserLogin";
import UserRegistration from "./components/pages/userLogin/UserRegistration";
import AuthContex from "./store/auth-context";


function App() {
  const ctx = useContext(AuthContex)

  return (
      <>
      <Switch>
        
          <Route path={ADMIN} >
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
          <Route path={USERLOGIN}>
            {ctx.isLoggedIn && <Redirect to ={MAIN_HOME}/>}
          <UserLogin />
          </Route>
          <Route path={REGISTER}>
            <UserRegistration />
          </Route>
        </Leyout>

      </Switch>
      </>


  );
}

export default App;
