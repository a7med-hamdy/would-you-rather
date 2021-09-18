import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@mui/material/Button';
import { setAuthedUser } from '../redux/actions/authedUser';
import { Redirect } from 'react-router-dom';

class Login extends Component{

    state = {
        name : '', 
        redirect : false,
    }

    handleSelect =(text) =>{
        this.setState(() => ({
            name : text
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const arr = Object.keys(this.props.users);
        let n;
        arr.map((user) => {
            if(this.props.users[user].name === this.state.name)
            {
                n = this.props.users[user].id
            }
        })
        
        this.props.dispatch(setAuthedUser(n))
        this.setState(() => ({
            name : '',
            redirect : true
        }))
    }
    render(){
        const {users} = this.props;
        const { from } = this.props.location.state || {from : { pathname : '/Home'}};
        if(this.state.redirect === true){
            return <Redirect to = {from} />
        }
        const Array = Object.keys(users);
        const usersArray = Array.map((user) => users[user].name)
        return(
            <div className = 'login-area' style = {{display : 'flex', flexDirection : 'column' ,justifyContent : 'center', alignItems : 'center'}}>
                <h2 style = {{}}>Welcome to "Would You Rather"</h2>
                <span style = {{display : 'block'}}>Please login to continue...</span>
                <form onSubmit = {this.handleSubmit}>
                <Autocomplete
                    options={usersArray}
                    style={{ width: 300, marginTop : '15px', marginBottom : '10px' }}
                    renderInput={(params) =>
                    <TextField {...params} label="Select user" variant="outlined" />}
                    onSelect = {(event) => this.handleSelect(event.target.value)}
                />
                <Button type = "submit" disabled = {this.state.name === ''} variant = 'contained'>
                    Login
                </Button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = ({users}) =>{
    return{
        users,
    }
}

export default connect(mapStateToProps)(Login);