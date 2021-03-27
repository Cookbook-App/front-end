import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import hasToken from './fetchToken'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest}
        render={props => hasToken() ? <Component {...props} /> : <Redirect to='/' /> }
        />
    )
}

export default PrivateRoute