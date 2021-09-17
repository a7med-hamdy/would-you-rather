import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@mui/material/Button';
import { setAuthedUser } from '../redux/actions/authedUser';
class Login extends Component{

    state = {
        name : '' 
    }

    handleSelect =(text) =>{
        this.setState(() => ({
            name : text
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.name))
        this.setState(() => ({
            name : ''
        }))
    }
    render(){
        const {users} = this.props;
        const Array = Object.keys(users);
        const usersArray = Array.map((user) => users[user].name)
        return(
            <div className = 'login-area' style = {{display : 'flex', flexDirection : 'column' ,justifyContent : 'center', alignItems : 'center'}}>
                <h2 style = {{}}>Welcome to "Would You Rather"</h2>
                <span style = {{display : 'block'}}>Please login to continue...</span>
                <form onSubmit = {this.handleSubmit}>
                <Autocomplete
                    options={usersArray}
                    style={{ width: 300 }}
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