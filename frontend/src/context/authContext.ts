import React from 'react';


const AuthContext = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: (val: boolean) => { },
    token: null
})

export default AuthContext;