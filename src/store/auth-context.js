import React, {useEffect, useState} from 'react';

 const AuthContext = React.createContext({

    isLoggedIn: false,
     onLogout: () => {},
     onLogin: (email, password) => {}
})


export const AuthContextProvider = (props) => {
     const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [data, setData] = useState({})
    let userInfoFetch = (email, password) => {
         console.log(email,password)
        fetch("http://159.65.126.180/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((user) => {
                setData(user);
            })
            .catch((e) => console.log(e));
    };
    console.log(data)
    useEffect(() => {
        const storeData = localStorage.getItem('isLoggedIn')

        if(storeData === '1'){
            setIsLoggedIn(true)
        }
    },[])

    const LogoutHandler =() => {
         localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    const LoginHandler = (email, password) =>{
        // localStorage.setItem('isLoggedIn','1');
        // setIsLoggedIn(true)
        userInfoFetch(email, password)
    }


     return(
         <AuthContext.Provider value={{
             isLoggedIn: isLoggedIn,
             onLogout: LogoutHandler,
             onLogin: LoginHandler
         }
         }>
             {props.children}
         </AuthContext.Provider>
     )
}

export default AuthContext