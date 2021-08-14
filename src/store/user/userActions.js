
import {logoutUser, setUser} from "./userActionCreators";

export const logginHandler =(email, password) => (dispatch) =>{
    fetch('http://159.65.126.180/api/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({email, password}),
    }).then((res) => {
        console.log(res)
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('');
        }
    }).then(data => {


        dispatch(setUser(data.user))
        localStorage.setItem('token',data.token.access_token)
    })

}

export const tokenHandler =(token) => (dispatch) => {
    fetch('http://159.65.126.180/api/auth/me', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(),
    }).then((res) => {
        console.log(res)
        if (res.ok) {
            return res.json()
        }
        else {
            localStorage.removeItem('token')
        }
    }).then(data => {


        dispatch(setUser(data))
        console.log(data)
    })

}

export const logoutHandler  = () =>
    dispatch => {
        dispatch(logoutUser(false))
        localStorage.removeItem('token')
        console.log('jhsjdsjd')
    }


