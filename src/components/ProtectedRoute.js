import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({component : Component, exact, path, logged}) =>{
    setTimeout(() => {
        if(!logged)
        {
            alert("please login first")
        }
    },200)
    
    return(
        <Route 
            exact = {exact}
            path = {path}
            render = {(props) =>
                logged ? (<Component {...props}/>) :  (<Redirect to = {{
                    pathname : '/',
                    state : {
                        from : props.location
                    }
                }} />)
            } 
        />
    )
} 



