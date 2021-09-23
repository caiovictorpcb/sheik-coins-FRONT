import React, { useState } from 'react'


const UserContext = React.createContext();

const UserContextProvider = (props) =>{
    const [jwt, setJwt] = useState()
    const [user, setUser] = useState()
    const [logged, setLogged] = useState(false)

    const login = (response)=>{
        setJwt({token:response.data.data.token})
        setUser(response.data.data.user)
        setLogged(true)
    }

    return(
        <UserContext.Provider value={{jwt, user, logged, login}}>
            {props.children}
        </UserContext.Provider>
    

    
        )
}

export { UserContext, UserContextProvider };

