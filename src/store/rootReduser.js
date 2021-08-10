import { combineReducers } from 'redux';
import user from './user/userRedusers'


const appReducer = combineReducers({
    user,

});


export default appReducer;