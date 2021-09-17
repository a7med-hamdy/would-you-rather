import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({component : Component, exact, path, logged}) =>{
    
    return(
        <Route 
            exact = {exact}
            path = {path}
            render = {(props) =>
                logged ? (<Component {...props}/>) :  (<Redirect to = '/login' />)
            } 
        />
    )
} 



