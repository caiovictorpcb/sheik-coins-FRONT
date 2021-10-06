import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();


const UserContextProvider = (props) =>{
    
    const [jwt, setJwt] = useState()
    const [user, setUser] = useState()
    const [logged, setLogged] = useState()

    useEffect(() =>{
        setJwt(JSON.parse(localStorage.getItem('jwt')))
        setUser(JSON.parse(localStorage.getItem('user')))
        setLogged(localStorage.getItem('logged'))
    },[logged])


    const setCredentials = (token, usuario) => {
            localStorage.setItem('jwt', JSON.stringify(token));
            localStorage.setItem('user', JSON.stringify(usuario))
            localStorage.setItem('logged', true)
    }

    const login = (token, user) =>{
        setLogged(true)
        setCredentials(token, user)
    }

    return(
        <UserContext.Provider value={{jwt, user, logged, login}}>
            {props.children}
        </UserContext.Provider>
        )
}

export { UserContext, UserContextProvider };

