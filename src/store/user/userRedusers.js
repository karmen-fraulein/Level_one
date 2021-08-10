import {LOGGED_USER, LOGOUT_USER} from "./userActionConst";

const initialState={
    user:{},
    isloggedIn: false,
    loading: false,
    token: '',
    errors: '',

}

  const user =(state = initialState, action) => {
    switch (action.type){
        case LOGGED_USER : return {
            ...state,
            user: action.userData,
            isloggedIn: true,
        };
        case LOGOUT_USER : return{

            isloggedIn: action.isloggedIn,
        }

        default:  return  state
    }
}

export default user