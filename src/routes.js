import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login/login'
import Main from './containers/Main/main'
import SignUp from './containers/SignUp/signup'
import Portfolio from './containers/Portfolio/portfolio'

const Router = () =>{
    return(
    <BrowserRouter>
        <Route component={Login} path='/login' />
        <Route component={Main} path='/' exact />
        <Route component={SignUp} path='/signup' />
        <Route component={Portfolio} path='/portfolio'/>
    </BrowserRouter>
    )
}

export default Router;