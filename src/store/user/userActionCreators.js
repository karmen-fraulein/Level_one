import {LOGGED_USER, LOGOUT_USER} from "./userActionConst";


export const setUser =(userData) => {
    return{
        type: LOGGED_USER,
        userData,
    }
}

export const logoutUser = (isloggedIn) =>{
    return{
        type: LOGOUT_USER,
        isloggedIn,
    }
}