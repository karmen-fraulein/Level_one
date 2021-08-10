import {useContext, useEffect} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {tokenHandler} from "./store/user/userActions";


function App() {
  const ctx = useContext(AuthContex)
  const isloggedIn = useSelector(state => state.user.isloggedIn)
  const dispatch = useDispatch()
  useEffect(()  =>  {
    let token = localStorage.getItem('token')

    if(token){
      dispatch(tokenHandler(token))
    }


  },[])

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
            {isloggedIn && <Redirect to ={MAIN_HOME}/>}
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
