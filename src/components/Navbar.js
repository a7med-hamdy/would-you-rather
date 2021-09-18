import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../redux/actions/authedUser';

class Navbar extends Component{

 
    handleLogOut = (e) =>{
        this.props.dispatch(setAuthedUser(null));
    }

    render(){
        return(
            <nav className = 'nav'>
                <ul>
                    <li className = 'primary-nav'>
                        <NavLink to='/Home'>
                            <Button variant = 'outlined'>
                                Home
                            </Button>
                        </NavLink>
                    </li>
                    <li className = 'primary-nav'>
                        <NavLink to='/add'>
                            <Button variant = 'outlined'>
                                New Question
                            </Button>
                        </NavLink>
                    </li>
                    <li className = 'primary-nav'>
                        <NavLink to='/Leaderboard'>
                            <Button variant = 'outlined'>
                                Leaderboard
                            </Button>
                        </NavLink>
                    </li>
                    {this.props.logged ? 
                    <li className = 'second-nav'>
                        <div className = 'welcome-message'>hello {this.props.name.name}</div>
                        <NavLink to='/' exact activeClassName='active' >
                            <Button variant = 'outlined' onClick = {this.handleLogOut}>
                                Logout
                            </Button>
                        </NavLink>
                    </li>
                    :
                    null 
                    }
                </ul>
                    
            </nav>
        )
    }
}

const mapStateToProps = ({authedUser, users}) =>{
    if(authedUser === null){
        return{
            logged : false
        }
    }
    else{
        return{
            logged : true,
            name : users[authedUser]
        }
    }
    
}

export default connect(mapStateToProps)(Navbar);